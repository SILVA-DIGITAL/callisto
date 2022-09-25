import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Instance } from '@react-three/drei'

const Bubble = ({ factor, speed, xFactor, yFactor, zFactor }) => {
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      Math.cos(t) +
        Math.sin(t * 1) / 5 +
        xFactor +
        Math.cos((t / 5) * factor) +
        (Math.sin(t * 1) * factor) / 5,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        yFactor +
        Math.sin((t / 5) * factor) +
        (Math.cos(t * 1) * factor) / 5,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        zFactor +
        Math.cos((t / 5) * factor) +
        (Math.sin(t * 1) * factor) / 5
    )
  })
  return <Instance ref={ref} />
}

export default Bubble
