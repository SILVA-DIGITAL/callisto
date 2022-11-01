import { Environment } from '@react-three/drei'
import { Statue } from '@/components/statue'
import { Lights } from '@/components/lights'
import { useControls } from 'leva'
import { OrbitControlsWrapper } from '@/utilities/orbitControlsWrapper'

const StatueDOM = () => <></>

const StatueR3F = () => {
  const { speed, floatIntensity, colour, scale } = useControls({
    speed: {
      value: 2,
      min: 1,
      max: 100,
      step: 1,
    },
    floatIntensity: {
      value: 1.5,
      min: 1,
      max: 100,
      step: 1,
    },
    scale: {
      value: 0.7,
      min: 0,
      max: 1,
      step: 0.1,
    },
    colour: '#468da6',
  })
  return (
    <>
      <OrbitControlsWrapper />
      <Lights />
      <Statue
        speed={speed}
        floatIntensity={floatIntensity}
        colour={colour}
        scale={scale}
      />
      <Environment background preset='night' />
    </>
  )
}

export default function StatuePage() {
  return (
    <>
      <StatueDOM />
      <StatueR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
