import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const FeedInstagram = ({ data }) => {
  const imgInstagram = data.allInstaNode.edges;

  const instagramLogo = data.instagramlogo.childImageSharp.fluid
  const facebookLogo = data.facebooklogo.childImageSharp.fluid
  const twitterLogo = data.twitterlogo.childImageSharp.fluid

  const resultInstagram = imgInstagram.map((value, key) => {
    return (
      <div className="div-instagram" key={key}>
        <img src={value.node.localFile.childImageSharp.fixed.src} alt="img-feedinstagram" />
        <p className="title"><i className="far fa-thumbs-up"></i>{value.node.likes}</p>
      </div>
    )
  })

  return (
    <div>
      <div className="flex-feed">
        {resultInstagram}
      </div>
      <div className="logos-social-network">
        <div className="social-network">
          <div style={{ width: `40px`, margin: `0 auto` }}>
            <a href="https://instagram.com/boro_digital">
              <Img fluid={instagramLogo} />
            </a>
          </div>
        </div>
        <div className="social-network">
          <div style={{ width: `40px`, margin: `0 auto` }}>
            <Img fluid={facebookLogo} />
          </div>
        </div>
        <div className="social-network">
          <div style={{ width: `40px`, margin: `0 auto` }}>
            <a href="https://twitter.com/boro_digital">
              <Img fluid={twitterLogo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              id
              likes
              caption
              localFile {
                childImageSharp {
                  fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              # Only available with the public api scraper
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
              }
            }
          }
        }
        instagramlogo: file(relativePath: { eq: "images/instagram-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        twitterlogo: file(relativePath: { eq: "images/twitter-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        facebooklogo: file(relativePath: { eq: "images/facebook-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      `}
    render={data => <FeedInstagram data={data} {...props} />}
  />
)