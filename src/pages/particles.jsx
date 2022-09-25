import { OrbitControls, CameraShake } from '@react-three/drei'
import { useControls } from 'leva'
import { Particles } from '@/components/particles'

const Page = () => {
  return <></>
}

Page.r3f = () => {
  const controls = useControls({
    focus: { value: 6.01, min: 3, max: 7, step: 0.01 },
    speed: { value: 100, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 5.6, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 36, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.45, step: 0.01 },
  })

  return (
    <>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.1}
      />
      <CameraShake
        yawFrequency={1}
        maxYaw={0.05}
        pitchFrequency={1}
        maxPitch={0.05}
        rollFrequency={0.5}
        maxRoll={0.5}
        intensity={0.2}
      />
      <Particles {...controls} />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Particles',
    },
  }
}
