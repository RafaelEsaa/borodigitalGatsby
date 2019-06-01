import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import TitleSection from "../components/utils/TitleSection";
import dataAbout from "../data/aboutEs.json";

const About = ({ data }) => {
  return (
    <div className="row full-width about-us no-margin">
      <div className="col-md-6">
        <TitleSection data={dataAbout} title="About Us" hr="70%" />
        <p className="text-aboutus text-center">{dataAbout.description}</p>
      </div>
      <div className="col-md-6">
        <div style={{ maxWidth: `700px` }}>
          <Img fluid={data.fileNameEsp.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileNameEsp: file(relativePath: { eq: "images/quienes-somos.png" }) {
          childImageSharp {
            fluid(maxWidth: 1100, maxHeight: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      `}
    render={data => <About data={data} {...props} />}
  />
)