import React from 'react'
import { VertexParticles } from '@/components/particles/VertexParticles'

const VertexParticlesDOM = () => {
  return <></>
}

const VertexParticlesR3F = () => (
  <>
    <VertexParticles />
  </>
)

export default function VertexParticlesPage() {
  return (
    <>
      <VertexParticlesDOM />
      <VertexParticlesR3F />
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
