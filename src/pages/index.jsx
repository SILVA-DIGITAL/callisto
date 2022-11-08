import demoModelsQuery from '@/hygraph/demoModelsQuery'
import client from '@/lib/apollo'
import { Stars } from '@/components/stars'
import { gql, useLazyQuery } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

const HomePageDOM = () => {
  const query = gql`
    query demoModels {
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

  const [getUserDetailByApolloClientAPICall, { loading, error, data }] =
    useLazyQuery(query)

  // console.log('loading', loading)
  // console.log('error', error)
  // console.log('data', data)

  return (
    <>
      {' '}
      <button
        className='flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-800 text-white hover:bg-gray-700'
        onClick={() => getUserDetailByApolloClientAPICall()}
      >
        {loading ? (
          <div className='mr-2 w-5 h-5 border-l-2 rounded-full animate-spin' />
        ) : null}
        <span>APOLLO CLIENT</span>
      </button>
    </>
  )
}

const HomePageR3F = () => (
  <>
    <Stars />
  </>
)

export default function HomePage({ demos }) {
  // console.log('demos', demos)
  // const query = gql`
  //   query demoModels {
  //     demoModels {
  //       createdAt
  //       id
  //       publishedAt
  //       slug
  //       subtitle
  //       title
  //       updatedAt
  //     }
  //   }
  // `
  // const { loading, error, data } = useQuery(query)
  // console.log('loading', loading)
  // console.log('error', error)
  // console.log('data', data)
  return (
    <>
      <ApolloProvider client={client}>
        <HomePageDOM />
      </ApolloProvider>
      <HomePageR3F />
    </>
  )
}

// export async function getStaticProps() {
//   const { data } = await client.query(demoModelsQuery)

//   return {
//     props: {
//       demos: data.demoModels,
//     },
//   }
// }
