import React, { useState, useEffect, useRef } from 'react'
import routePathNames from '@/constants/routes'
import useStore from '@/stores/app'
import { setState } from '@/stores/app'

const Dom = ({ children }) => {
  const [classNames, setClassNames] = useState(null)
  const store = useStore((state) => state)
  const ref = useRef(null)

  useEffect(() => {
    if (store.router !== null) {
      const pathname = store.router.pathname.substring(1)

      switch (pathname) {
        case pathname.includes(routePathNames.SANDBOXES):
          setClassNames(`absolute top-0 left-0 z-10' w-screen h-screen`)
          break
        default:
          setClassNames()
      }
    }
  }, [store])

  useEffect(() => {
    setState({ dom: ref })
  }, [])

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  )
}

export default Dom
