import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import EmailContact from '../components/utils/EmailContact'
import Layout from "../components/layout"
import LayoutEsp from "../componentsEsp/layout"

export default ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <div>
      {/* Esta condicional es para mostrar el layout segun sea la url (/es o /) */}
      {(process.env.GATSBY_HOSTNAME == location.href) ?
        <Layout location={location} menuFixed={true}>
          <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
          <div className="row full-width no-margin section-index-blog">
            <div className="col-md-12 banner-post">
              <div className="title-img">
                <h1 className="title">{post.frontmatter.title}</h1>
                {/* <img src={imgBlog} className="img-post" alt="img-indexpost" /> */}
              </div>
            </div>
            <div className="col-md-12 description-blog">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <EmailContact email="info@borodigital.com" />
        </Layout>
        :
        <LayoutEsp location={location} menuFixed={true}>
          <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
          <div className="row full-width no-margin justify-content-md-center section-index-blog">
            <div className="col-md-12 banner-post">
              <div className="title-img">
                <h1 className="title">{post.frontmatter.title}</h1>
              </div>
            </div>
            <div className="col-md-8 description-blog">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <EmailContact email="info@borodigital.com" />
        </LayoutEsp>

      }
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        imgthumbnail
      }
    }
    allFile(filter:{relativeDirectory:{eq:"images"}}){
      edges{
        node{
          childImageSharp{
            fluid(maxWidth: 1200){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`