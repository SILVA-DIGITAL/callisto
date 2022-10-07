import { ContactShadows } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { Bubbles } from '@/components/bubbles'

const BubblesPage = (props) => {
  return <></>
}

BubblesPage.r3f = (props) => (
  <>
    <color attach='background' args={['#000']} />
    <fog attach='fog' args={['white', 60, 110]} />
    <ambientLight intensity={3.0} />
    <Bubbles />
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
        radius={0.5}
        intensity={300}
        luminanceInfluence={1.0}
        color='black'
      />
    </EffectComposer>
  </>
)

export async function getStaticProps() {
  return {
    props: {
      title: 'Bubbles',
    },
  }
}

export default BubblesPage
