import { Environment } from '@react-three/drei'
import { Statue } from '@/components/statue'
import { Lights } from '@/components/lights'

const StatuePage = () => {
  return <></>
}

StatuePage.r3f = () => (
  <>
    <Lights />
    <Statue />
    <Environment background preset='night' />
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
