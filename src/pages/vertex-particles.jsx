import React from 'react'
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
