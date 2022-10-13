import { Suspense } from 'react'
import { Html, useProgress, useGLTF } from '@react-three/drei'
import { Stars } from '@/components/stars'

const Page = (props) => {
  return <></>
}

// function Helmet() {
//   const { nodes } = useGLTF(
//     'Straw.gltf'
//   )
//   return <primitive object={nodes['node_damagedHelmet_-6514']} />
// }

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
