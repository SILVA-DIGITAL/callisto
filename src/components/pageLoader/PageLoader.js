import { SphereParticles } from '@/components/particles/SphereParticles'
import { OrthographicCamera, Html, useProgress } from '@react-three/drei'

const PageLoader = ({ zoom }) => {
  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={zoom} />
      <SphereParticles />
      {/* <Html center>{progress} % loaded</Html> */}
    </>
  )
}

export default PageLoader
