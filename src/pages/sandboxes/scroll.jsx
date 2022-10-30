import { useIntersect, Scroll, ScrollControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'

const ScrollDOM = () => {
  return <></>
}

const Cube = ({ color, position, children }) => {
  const visible = useRef()
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  )

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime()

    ref.current.rotation.x = elapsedTime * xRandomFactor
    ref.current.rotation.y = elapsedTime * yRandomFactor

    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      5,
      delta
    )
    ref.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  )
}

const ScrollR3F = () => {
  const colorOne = '#765252'
  const colorTwo = 'red'
  const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  let increment = 5

  return (
    <>
      <pointLight color={colorOne} position={[8, -25, 5]} intensity={20} />
      <pointLight
        color={colorTwo}
        position={[0, 200 * 2.25, 5]}
        intensity={10}
      />
      <ScrollControls pages={3}>
        <Scroll>
          {[...cubes].map(() => {
            increment--

            return (
              <>
                <Cube color={colorOne} position={[0, increment, 0]}>
                  <boxGeometry />
                </Cube>
              </>
            )
          })}
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default function ScrollPage() {
  return (
    <>
      <ScrollDOM />
      <ScrollR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Scroll',
    },
  }
}
