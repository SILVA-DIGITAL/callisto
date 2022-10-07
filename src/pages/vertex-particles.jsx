import { VertexParticles } from '@/components/particles/VertexParticles'

const VertexParticlesPage = () => {
  return (
    <>
      <div>
        <h1>Vertex Particles</h1>
      </div>
    </>
  )
}

VertexParticlesPage.r3f = () => {
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
      title: 'Vertex Particles',
    },
  }
}

export default VertexParticlesPage
