import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import useStore from '@/stores/app'
import routePathNames from '@/constants/routes'
import showPerf from '@/utilities/showPerf'

const LCanvas = ({ children }) => {
  const store = useStore((state) => state)
  const [canvas, setCanvas] = useState({})

  useEffect(() => {
    if (store.router !== null) {
      const pathname = store.router.pathname.substring(1)
      switch (pathname) {
        case `${routePathNames.SANDBOXES}vertex-particles`:
          setCanvas((prevState) => ({
            ...prevState,
            camera: {
              fov: 7,
              position: [0, 0, 100],
              near: 20,
              far: 100,
            },
          }))
          break
        case `${routePathNames.SANDBOXES}bubbles`:
          setCanvas((prevState) => ({
            ...prevState,
            style: {
              position: 'absolute',
              top: 0,
            },
            dpr: [1, 2],
            gl: { antialias: true },
            camera: { fov: 85, position: [0, 0, 100], near: 1, far: 120 },
          }))
          break
        case `${routePathNames.SANDBOXES}watch`:
          setCanvas((prevState) => ({
            ...prevState,
            dpr: [1, 2],
            camera: {
              fov: 85,
              position: [0, 0, 5],
            },
          }))
          break
        case `${routePathNames.SANDBOXES}video`:
          setCanvas((prevState) => ({
            ...prevState,
          }))
          break
        default:
          setCanvas((prevState) => ({
            ...prevState,
            dpr: [1, 2],
            camera: {
              fov: 85,
              position: [0, 0, 5],
            },
          }))
      }
    }
  }, [store])

  const myCanvas = useRef()
  console.log('myCanvas', myCanvas)
  return (
    <>
      <Canvas
        {...canvas}
        onCreated={(state) => state.events.connect(store.dom.current)}
        ref={myCanvas}
      >
        {showPerf()}
        {children}
        <Preload all />
      </Canvas>
    </>
  )
}

export default LCanvas
