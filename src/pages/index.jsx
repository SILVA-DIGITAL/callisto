import client from '@/lib/apollo'
import demoModelsQuery from '@/hygraph/demoModelsQuery'
import { Stars } from '@/components/stars'

const HomePageDOM = () => {
  return <></>
}

const HomePageR3F = () => (
  <>
    <Stars />
  </>
)

export default function HomePage({ demos }) {
  return (
    <>
      <HomePageDOM />
      <HomePageR3F />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query(demoModelsQuery)

  return {
    props: {
      demos: data.demoModels,
    },
  }
}
