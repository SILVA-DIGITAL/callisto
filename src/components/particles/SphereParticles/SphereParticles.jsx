import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points } from '@react-three/drei'
import { Quaternion, Vector3 } from 'three'
import * as random from 'maath/random'
import * as buffer from 'maath/buffer'
import * as misc from 'maath/misc'

const rotationAxis = new Vector3(13, 10, 20).normalize()
const q = new Quaternion()

const SphereParticles = (props) => {
  const pointsRef = useRef()
  const [{ sphere1, sphere2, final }] = useState(() => {
    const box = random.inBox(new Float32Array(100000), {
      sides: [0.1, 0.1, 0.1],
    })

    const sphere1 = random.inSphere(box.slice(0), { radius: 0.1 })
    const sphere2 = random.inSphere(box.slice(0), { radius: 0.6 })
    const final = box.slice(0)

    return { sphere1, sphere2, final }
  })

  useFrame(({ clock }) => {
    const et = clock.getElapsedTime()
    const t = misc.remap(Math.sin(et), [-1, 1], [2, 1])
    const t2 = misc.remap(Math.cos(et * 50), [-12, 1], [0, 1])

    buffer.rotate(sphere1, {
      q: q.setFromAxisAngle(rotationAxis, t2 * 0.2),
    })

    buffer.lerp(sphere1, sphere2, final, t)
  })

  return (
    <Points positions={final} stride={3} ref={pointsRef} {...props}>
      <pointsMaterial size={1} />
    </Points>
  )
}

export default SphereParticles
