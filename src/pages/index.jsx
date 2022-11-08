import client from '@/lib/apollo'
import demoModelsQuery from '@/hygraph/demoModelsQuery'
import { Stars } from '@/components/stars'

const HomePageDOM = () => {
  return <></>
}

const HomePageR3F = () => <></>

export default function HomePage({ demos }) {
  return (
    <>
      <div className='text-center'>{demos[0].title}</div>
      <HomePageDOM />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query(demoModelsQuery)

  return {
    props: {
      demos: data.demoModels,
    },
  }
}
