import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Loader } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import useStore from '@/stores/app'

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

const LCanvas = ({ children }) => {
  const store = useStore((state) => state)
  const [canvas, setCanvas] = useState({
    style: {
      position: 'absolute',
      top: 0,
    },
    dpr: [1, 2],
    gl: { antialias: true },
    camera: { fov: 85, position: [0, 0, 100], near: 1, far: 120 },
  })

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
        case 'spotlight':
          setCanvas((prevState) => ({
            ...prevState,
            camera: {
              fov: 50,
              position: [0, 0, 100],
              near: 1,
              far: 120,
            },
          }))
          break
        default:
          setCanvas((prevState) => ({
            ...prevState,
            camera: {
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
        <LControl />
        <Perf position={'top-right'} />
        <Preload all />
        {children}
      </Canvas>
      <Loader />
    </>
  )
}

export default LCanvas
