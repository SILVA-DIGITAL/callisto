import { useEffect, Suspense } from 'react'
import { Loader } from '@react-three/drei'
import { useRouter } from 'next/router'
import { setState } from '@/stores/app'
import dynamic from 'next/dynamic'
import Head from '@/components/layout/header'
import Dom from '@/components/layout/dom'
import '@/styles/global.css'

const CanvasWrapper = dynamic(() => import('@/components/layout/canvas'), {
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
        <Suspense fallback={<Loader />}>
          <CanvasWrapper>
            <Component {...pageProps} />
          </CanvasWrapper>
        </Suspense>
      </Dom>
    </>
  )
}

export default App
