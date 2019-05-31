import React, { Component } from 'react';
import { graphql } from "gatsby"

import SEO from '../components/seo'
import Layout from '../components/layout'
import BannerHome from '../components/utils/BannerHome'
import ContentPlan from '../components/ContentPlans'
import EmailContact from '../components/utils/EmailContact'

import dataContentPlanBasic from "../data/contentPlanBasicEsp"
import dataContentPlanMedium from "../data/contentPlanMediumEsp"
import dataContentPlanAdvance from "../data/contentPlanAdvanceEsp"

class SocialMedia extends Component {
    render() {
        const { location, data } = this.props;
        console.log(data, 'image')
        return (
            <Layout location={location} menuFixed={true}>
                <SEO title={'Content Writer'} keywords={[`gatsby`, `application`, `react`]} />
                <BannerHome
                    img={data.imageSocialMediaEsp}
                    title={'Redacción de Contenido'}
                    textColor={'#24344C'}
                    subtitleButton={'It`s time to grow up your brand and connect with your ideal customer'} />
                <div className="row full-width no-margin">
                    <div className="col-md-12 plans-social-media">
                        <ContentPlan
                            data={dataContentPlanBasic}
                            backgroundTitle={'#5356a4'} />
                        <ContentPlan
                            data={dataContentPlanMedium}
                            backgroundTitle={'#28B4EE'} />
                        <ContentPlan
                            data={dataContentPlanAdvance}
                            backgroundTitle={'#ED0990'}
                        />
                    </div>
                    <div className="col-md-12 py-5">
                        <h5>Tipos de posts: 300 palabras, 600 palabras o 1000 palabras</h5>
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