import React from 'react'
import dynamic from 'next/dynamic'
import Emitter from './Emitter'
import debounce from 'lodash.debounce'
const store = dynamic(() => import('../store.js'), { ssr: false })

class Resize extends React.Component {
  constructor() {
    super()
    this.resize = this.resize.bind(this)
    this.init()
  }

  resize() {
    store.bounds.ww = window.innerWidth
    store.bounds.wh = window.innerHeight

    Emitter.emit('resize')
  }

  on() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debounce(this.resize, 200))
    }
  }

  init() {
    this.on()
  }
}

export default new Resize()
