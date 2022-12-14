import { ContactShadows } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles } from '@/components/bubbles'
import { useControls } from 'leva'
import { OrbitControlsWrapper } from '@/utilities/orbitControlsWrapper'

const BubblesDOM = () => <></>

const BubblesR3F = () => {
  const { bubbles, speed, color } = useControls({
    bubbles: {
      value: 31,
      min: 1,
      max: 31,
      step: 1,
    },
    speed: {
      value: 1,
      min: 1,
      max: 100,
      step: 1,
    },
    color: '#8ed1fc',
  })

  return (
    <>
      <OrbitControlsWrapper />
      <fog attach='fog' args={['white', 60, 110]} />
      <ambientLight intensity={3.0} />
      <Bubbles particlesAmount={bubbles} speed={speed} color={color} />
      <ContactShadows
        position={[0, -100, 0]}
        opacity={0.6}
        scale={130}
        blur={1}
        far={20}
      />
      <EffectComposer multisampling={0}>
        <SSAO
          samples={31}
          radius={10.5}
          intensity={300}
          luminanceInfluence={1.0}
          color='black'
        />
      </EffectComposer>
    </>
  )
}

export default function BubblesPage() {
  return (
    <>
      <BubblesDOM />
      <BubblesR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Bubbles' },
  }
}
