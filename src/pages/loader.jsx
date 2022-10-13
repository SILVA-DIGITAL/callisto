import dynamic from 'next/dynamic'
const Loader = dynamic(() => import('@/components/loader'), { ssr: false })
// import Loader from '../components/loader'

const LoaderPage = () => {
  return (
    <>
      <div>
        <h1>Loader</h1>
      </div>
    </>
  )
}

LoaderPage.r3f = () => {
  return (
    <>
      <color attach='background' args={[0xf5f3fd]} />
      <Loader />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Loader',
    },
  }
}

export default LoaderPage
