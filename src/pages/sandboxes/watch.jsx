import {
  PresentationControls,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import { Watch } from '@/components/watch'
import { useControls } from 'leva'
import { OrbitControlsWrapper } from '@/utilities/orbitControlsWrapper'

const WatchDOM = () => {
  return <></>
}

const WatchR3F = () => {
  const { scale, price } = useControls({
    scale: {
      value: 0.005,
      min: 0.001,
      max: 0.009,
      step: 0.001,
    },
    price: '20,000',
  })
  return (
    <>
      <OrbitControlsWrapper />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Watch
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.25, 0]}
          scale={scale}
          price={price}
        />
      </PresentationControls>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={2.5}
        far={4}
      />
      <Environment preset='city' />
    </>
  )
}

export default function WatchPage() {
  return (
    <>
      <WatchDOM />
      <WatchR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Watch',
    },
  }
}
