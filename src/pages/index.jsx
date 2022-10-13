import { Suspense, useRef } from 'react'
import {
  useGLTF,
  Html,
  useProgress,
  Environment,
  Float,
  ContactShadows,
} from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { Stars } from '@/components/stars'
import { Lights } from '@/components/lights'
import { GLTFLoader } from 'three-stdlib'

const Page = (props) => {
  return <></>
}

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/strawberry.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.strawberry.geometry}
//         material={materials.Strawberry}
//         rotation={[-0.05, -1.23, 1.54]}
//         scale={1.22}
//       />
//     </group>
//   )
// }

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, strawberry)
//   return <primitive object={gltf.scene} scale={0.4} />
// }

function Statue({ ...props }) {
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

function CustomLoader() {
  const { progress } = useProgress()
  return (
    <>
      <Html style={{ color: 'white' }}>{progress} % loaded</Html>
    </>
  )
}

Page.r3f = (props) => (
  <>
    <Suspense fallback={<CustomLoader />}>
      <Lights />
      <Statue />
      <Stars />
    </Suspense>
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
