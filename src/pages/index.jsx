import React, { useState } from 'react'
import client from '@/lib/apollo'
import loaderModel from '@/hygraph/loaderModel'
import { useTransition, animated, config } from 'react-spring'
import { PageLoader } from '@/components/pageLoader'

const HomePageDOM = () => {
  const [show, set] = useState(false)

  function Mount() {
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: show,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!show),
    })
    return transitions(
      (styles, item) =>
        item && (
          <animated.div style={styles}>
            Testing a spring animated div
          </animated.div>
        )
    )
  }

  return <>{Mount()}</>
}

const HomePageR3F = () => (
  <>
    <PageLoader zoom='150' />
  </>
)

export default function HomePage({ pageLoaderData }) {
  const { title } = pageLoaderData

  return (
    <>
      {/* <div className='text-center'>{demos[0].title}</div> */}
      <HomePageDOM />
      <HomePageR3F />
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
