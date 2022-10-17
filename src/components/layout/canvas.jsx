import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import useStore from '@/stores/app'
import env from '@/constants/env'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control.current) {
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action']
      domElement.style['touch-action'] = 'none'

      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])

  return <OrbitControls ref={control} domElement={dom.current} />
}

const showPerf = () => {
  if (process.env.NODE_ENV === env.DEVELOPMENT) {
    return <Perf position='top-left' />
  }
}

const LCanvas = ({ children }) => {
  const store = useStore((state) => state)
  const [canvas, setCanvas] = useState({})

  useEffect(() => {
    if (store.router !== null) {
      const pathname = store.router.pathname.substring(1)
      switch (pathname) {
        case 'vertex-particles':
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
        case 'bubbles':
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
        case 'watch':
          setCanvas((prevState) => ({
            ...prevState,
            dpr: [1, 2],
            camera: {
              fov: 85,
              position: [0, 0, 5],
            },
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

  return (
    <>
      <Canvas
        {...canvas}
        onCreated={(state) => state.events.connect(store.dom.current)}
      >
        {showPerf()}
        {children}
        <LControl />
        <Preload all />
      </Canvas>
    </>
  )
}

export default LCanvas
