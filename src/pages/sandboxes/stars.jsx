import React from 'react'
import { Stars } from '@/components/stars'

const StarsDOM = () => {
  return <></>
}

const StarsR3F = () => (
  <>
    <Stars />
  </>
)

export default function StarsPage() {
  return (
    <>
      <StarsDOM />
      <StarsR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Stars',
    },
  }
}
