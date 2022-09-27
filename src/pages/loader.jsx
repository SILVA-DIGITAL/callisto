import * as THREE from 'three'
import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { vertexShader } from '@/shaders/vertexShader'
import { fragmentShader } from '@/shaders/fragmentShader'
import { VertexParticles } from '@/components/particles/VertexParticles'

const Page = () => {
  return <></>
}

Page.r3f = () => {
  return (
    <>
      <color attach='background' args={[0xf5f3fd]} />
      <VertexParticles />
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
