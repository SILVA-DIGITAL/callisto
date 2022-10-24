import { Stars } from '@/components/stars'

const HomePageDOM = () => {
  return <></>
}

const HomePageR3F = () => (
  <>
    <Stars />
  </>
)

export default function HomePage() {
  return (
    <>
      <HomePageDOM />
      <HomePageR3F />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}
