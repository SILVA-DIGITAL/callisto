import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setState } from '@/stores/app'
import dynamic from 'next/dynamic'
import Head from '@/components/layout/header'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

const title = { title: 'silvadigital' }

const App = ({ Component, pageProps = title }) => {
  const router = useRouter()

  useEffect(() => {
    setState({ router })
  }, [router])

  return (
    <>
      <Head title={pageProps.title} />
      <Dom>
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
    </>
  )
}

export default App
