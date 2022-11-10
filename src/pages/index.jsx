import client from '@/lib/apollo'
import demoModelsQuery from '@/hygraph/demoModelsQuery'
import { PageLoader } from '@/components/pageLoader'

const HomePageDOM = () => {
  return <></>
}

const HomePageR3F = () => (
  <>
    <PageLoader zoom='200' />
  </>
)

export default function HomePage({ demos }) {
  return (
    <>
      {/* <div className='text-center'>{demos[0].title}</div> */}
      <HomePageDOM />
      <HomePageR3F />
    </>
  )
}
