import { gql } from '@apollo/client'

const demoModelsQuery = {
  query: gql`
    query DemoModels {
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
  `,
}

export default demoModelsQuery
