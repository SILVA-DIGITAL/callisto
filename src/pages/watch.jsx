import {
  PresentationControls,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import { Watch } from '@/components/watch'

const WatchPage = (props) => {
  return <></>
}

WatchPage.r3f = (props) => (
  <>
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
        scale={0.003}
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

export default WatchPage

export async function getStaticProps() {
  return {
    props: {
      title: 'Watch',
    },
  }
}
