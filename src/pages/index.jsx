// import { gql } from '@apollo/client'
// import client from '@/lib/apolloClient'
import { GraphQLClient } from 'graphql-request'
import { Stars } from '@/components/stars'

const HomePageDOM = () => {
  return <></>
}

const HomePageR3F = () => (
  <>
    <Stars />
  </>
)

export default function HomePage({ demoModels }) {
  console.log('demoModels', demoModels)
  return (
    <>
      <HomePageDOM />
      <HomePageR3F />
    </>
  )
}

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    'https://api-eu-west-2.hygraph.com/v2/cla5fmzsx46vo01up5txp92w5/master'
  )

  const { demoModels } = await hygraph.request(
    `
      {
        demoModels {
          createdAt
          id
          publishedAt
          slug
          subtitle
          title
          updatedAt
        }
      }
    `
  )

  return {
    props: {
      demoModels,
    },
  }
}
