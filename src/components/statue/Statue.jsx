import { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Statue = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('./glb/statue-draco.glb')

  useFrame(() => (group.current.rotation.y += 0.002))

  return (
    <group ref={group} {...props} dispose={null}>
      <Float
        position={[0, 0, 0]}
        speed={2}
        rotationIntensity={0}
        floatIntensity={1.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0001.geometry}
          material={materials['default']}
          position={[0, -0.5, 0]}
          scale={[0.2, 0.2, 0.2]}
        >
          <meshStandardMaterial
            color='#EFD5D0'
            roughness={0.1}
            metalness={1.225}
          />
        </mesh>
      </Float>
    </group>
  )
}

export default Statue
