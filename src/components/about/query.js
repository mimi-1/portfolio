import { graphql } from "gatsby"
export const aboutQuery = graphql`
  {
    allContentfulAuthor(
      limit: 2
      filter: { isMain: { eq: true } }
      sort: { fields: name, order: DESC }
    ) {
      nodes {
        about {
          about
        }
        fullname
        name
        digest {
          digest
        }
        avatar {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
