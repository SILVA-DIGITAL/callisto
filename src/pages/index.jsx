import React, { useState } from 'react'
import client from '@/lib/apollo'
import loaderModel from '@/hygraph/loaderModel'
import { useTransition, animated, config } from 'react-spring'
import { PageLoader } from '@/components/pageLoader'
import { Background } from '@/components/background'

const HomePageDOM = ({ title }) => {
  const [show, set] = useState(false)

  function Mount() {
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: show,
      delay: 0,
      config: config.molasses,
      onRest: () => set(!show),
    })
    return transitions(
      (styles, item) =>
        item && (
          <div className='text-center'>
            <h1 className='px-6 py-4 text-center text-3xl'>
              Testing content &apos;{title}&apos; feeded from Hygraph animated
              with react-spring
            </h1>
          </div>
        )
    )
  }

  return <>{Mount()}</>
}

const HomePageR3F = () => (
  <>
    <Background />
    <PageLoader zoom='150' />
  </>
)

export default function HomePage({ pageLoaderData }) {
  const { title } = pageLoaderData
  const domProps = { title }

  return (
    <>
      <HomePageDOM {...domProps} className='z-10' />
      <HomePageR3F className='z-20' />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query(loaderModel)

  return {
    props: {
      pageLoaderData: data.loaderModels[0],
    },
  }
}
