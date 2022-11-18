import { Suspense } from 'react'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'

const Video = () => {
  const size = useAspect(1800, 1800)

  function VideoMaterial({ url }) {
    const texture = useVideoTexture(url, { canplaythrough: true })
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }

  function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }

  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url='../../../video/10.jpg' />}>
        <VideoMaterial url='../../../video/fireworks-on-beach.mp4' />
      </Suspense>
    </mesh>
  )
}

export default Video
