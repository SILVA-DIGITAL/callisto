import { VertexParticles } from '@/components/particles/VertexParticles'

const LoaderPage = () => {
  return (
    <>
      <div>
        <h1>Vertex Particles</h1>
      </div>
    </>
  )
}

LoaderPage.r3f = () => {
  return (
    <>
      <color attach='background' args={[0xf5f3fd]} />
      <VertexParticles />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Loader',
    },
  }
}

export default LoaderPage
