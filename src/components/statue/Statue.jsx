import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'

const Statue = (props) => {
  const { speed, floatIntensity, colour, scale } = props
  const ref = useRef()
  const statue = '../../../glb/statue-draco.glb'
  const { nodes, materials } = useGLTF(statue)
  useFrame(() => (ref.current.rotation.y += 0.002))

  return (
    <group ref={ref} {...props} dispose={null}>
      <Float
        position={[0, 0, 0]}
        speed={speed}
        rotationIntensity={0}
        floatIntensity={floatIntensity}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0001.geometry}
          material={materials['default']}
          position={[0, -0.5, 0]}
          scale={[scale, scale, scale]}
        >
          <meshStandardMaterial
            color={colour}
            roughness={0.1}
            metalness={1.225}
          />
        </mesh>
      </Float>
    </group>
  )
}

export default Statue
