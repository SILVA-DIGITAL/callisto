import React from 'react'
import { Video } from '@/components/video'
import { OrthographicCamera } from '@react-three/drei'

const VideoDOM = () => {
  return <></>
}

const VideoR3F = () => {
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
      <Video />
    </>
  )
}

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
