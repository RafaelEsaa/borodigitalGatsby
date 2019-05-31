import React, { Component } from 'react';
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Layout from '../components/layout'
import BannerHome from '../components/utils/BannerHome'
import SocialPlans from '../components/SocialPlans'
import EmailContact from '../components/utils/EmailContact'

import dataSocialPlanBasic from "../data/socialPlanBasicEsp"
import dataSocialPlanMedium from "../data/socialPlanMediumEsp"
import dataSocialPlanAdvance from "../data/socialPlanAdvanceEsp"

class SocialMedia extends Component {
  render() {
    const { location, data } = this.props;
    console.log(data, 'image')
    return (
      <Layout location={location} menuFixed={true}>
        <SEO title={'Social Media Management'} keywords={[`gatsby`, `application`, `react`]} />
        <BannerHome
          img={data.imageSocialMediaEsp}
          title={'Manejo de Redes Sociales'}
          textColor={'#24344C'}
          subtitleButton={'Es hora de hacer crecer su marca y conectarse con su cliente ideal'} />
        <div className="row full-width no-margin">
          <div className="col-md-12 plans-social-media">
            <SocialPlans
              data={dataSocialPlanBasic}
              backgroundTitle={'#5356a4'} />
            <SocialPlans
              data={dataSocialPlanMedium}
              backgroundTitle={'#28B4EE'} />
            <SocialPlans
              data={dataSocialPlanAdvance}
              backgroundTitle={'#ED0990'}
            />
          </div>
        </div>
        <EmailContact email="info@borodigital.com" />
      </Layout>
    )
  }
}

export const query = graphql`
    query {
      imageSocialMediaEsp: file(relativePath: { eq: "images/banner-socialmedia.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `
export default SocialMedia;