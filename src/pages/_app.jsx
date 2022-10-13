import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setState } from '@/stores/app'
import dynamic from 'next/dynamic'
import Head from '@/components/layout/header'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'

const CanvasWrapper = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const title = { title: 'silvadigital' }

const App = ({ Component, pageProps = title }) => {
  const router = useRouter()

  useEffect(() => {
    setState({ router })
  }, [router])

  // function CustomLoader() {
  //   const { progress } = useProgress()
  //   return <span style={{ color: 'white' }}>{progress} % loaded</span>
  // }

  return (
    <>
      <Head title={pageProps.title} />
      <Dom>
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f && (
        <CanvasWrapper>{Component.r3f(pageProps)}</CanvasWrapper>
      )}
    </>
  )
}

export default App
