import { MathUtils } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Instances } from '@react-three/drei'
import { Bubble } from '@/components/bubble'

const Bubbles = (props) => {
  const ref = useRef()
  const particles = Array.from({ length: props.particlesAmount }, () => ({
    factor: MathUtils.randInt(20, 50),
    speed: MathUtils.randFloat(0.01, props.speed),
    xFactor: MathUtils.randFloatSpread(80),
    yFactor: MathUtils.randFloatSpread(40),
    zFactor: MathUtils.randFloatSpread(40),
  }))

  useFrame(
    (state, delta) =>
      void (ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta
      ))
  )
  return (
    <Instances
      limit={particles.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 10, 0]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial roughness={0} color={props.color} />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

export default Bubbles
