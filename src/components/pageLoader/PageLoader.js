import { SphereParticles } from '@/components/particles/SphereParticles'
import { OrthographicCamera } from '@react-three/drei'

const PageLoader = ({ zoom }) => (
  <>
    <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={zoom} />
    <SphereParticles />
  </>
)

export default PageLoader
