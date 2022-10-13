import { Stars } from '@/components/stars'

const HomePage = (props) => {
  return <></>
}

HomePage.r3f = (props) => (
  <>
    <Stars />
  </>
)

export default HomePage

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  }
}
