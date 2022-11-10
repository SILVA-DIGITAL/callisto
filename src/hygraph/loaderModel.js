import { gql } from '@apollo/client'

const loaderModel = {
  query: gql`
    query loaderModel {
      loaderModels {
        title
      }
    }
  `,
}

export default loaderModel
