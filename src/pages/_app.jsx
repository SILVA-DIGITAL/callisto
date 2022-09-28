import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { setState } from '@/stores/app'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import LCanvas from '@/components/layout/canvas'

// const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
//   ssr: true,
// })

const title = { title: 'silvadigital' }

const App = ({ Component, pageProps = title }) => {
  const router = useRouter()

  useEffect(() => {
    setState({ router })
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <Dom>
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
    </>
  )
}

export default App
