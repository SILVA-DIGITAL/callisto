import { Suspense } from 'react'
import { Environment, Html, useProgress } from '@react-three/drei'
import { Statue } from '@/components/statue'
import { Lights } from '@/components/lights'

function CustomLoader() {
  const { progress } = useProgress()
  return (
    <>
      <Html style={{ color: 'white' }}>{progress} % loaded</Html>
    </>
  )
}

const StatuePage = (props) => {
  return <></>
}

StatuePage.r3f = (props) => (
  <>
    <Suspense fallback={<CustomLoader />}>
      <Lights />
      <Statue />
      <Environment background preset='night' />
    </Suspense>
  </>
)

export default StatuePage

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
