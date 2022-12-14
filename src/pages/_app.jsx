import React from 'react'
import { useEffect, Suspense } from 'react'
import { Loader } from '@react-three/drei'
import { useRouter } from 'next/router'
import { setState } from '@/stores/app'
import dynamic from 'next/dynamic'
import Head from '@/components/layout/header'
import Dom from '@/components/layout/dom'
import '@/styles/main.css'
import { PageLoader } from '@/components/pageLoader'

import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apollo'

const CanvasWrapper = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

const title = { title: 'silvadigital' }
const App = ({ Component, pageProps = title }) => {
  const router = useRouter()

  useEffect(() => {
    setState({ router })
  }, [router])

  const AppWrapper = ({ children }) => {
    const newChildren = React.Children.map(children, (child, index) =>
      index % 2 === 0 ? (
        <Dom>{child}</Dom>
      ) : (
        <CanvasWrapper>
          <Suspense fallback={<PageLoader zoom='150' />}>{child}</Suspense>
        </CanvasWrapper>
      )
    )

    return newChildren
  }

  const children = Component(pageProps).props.children

  return (
    <>
      <Head title={pageProps.title} />
      <ApolloProvider client={client}>
        <AppWrapper>{children}</AppWrapper>
      </ApolloProvider>
    </>
  )
}

export default App
