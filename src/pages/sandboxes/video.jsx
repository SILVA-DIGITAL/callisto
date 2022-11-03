import React from 'react'
import { Video } from '@/components/video'

const VideoDOM = () => {
  return <></>
}

const VideoR3F = () => (
  <>
    <Video />
  </>
)

export default function VideoPage() {
  return (
    <>
      <VideoDOM />
      <VideoR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Video',
    },
  }
}
