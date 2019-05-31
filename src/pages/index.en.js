import React, { Component } from "react"
import { graphql } from "gatsby"

import Img from 'gatsby-image'
import '../scss/index.scss';
import SEO from "../components/seo"
import Layout from "../components/layout"
import Aboutus from "../components/About"
import ContactForm from "../components/ContactForm"
import OurServices from "../components/OurServices"
import BannerHome from '../components/utils/BannerHome'
import FeedInstagram from "../components/FeedInstagram"
import EmailContact from "../components/utils/EmailContact"
import WebPlans from '../components/WebPlans'
import { animateScroll as scroll } from "react-scroll";

class IndexPage extends Component {

  componentDidMount() {
    this.effectScroll();
  }

  effectScroll() {
    scroll.scrollToTop();
  }

  render() {
    const { location, data } = this.props;
    return (
      <Layout location={location} menuFixed={true}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BannerHome
          img={data.imageBannerHome}
          textColor={'#ffffff'}
          title={'Take the first Step and Reach your Goals'}
          textButton={'Start'}
          subtitleButton={'Tell us about your project'} />
        <Aboutus />
        <OurServices />
        <div className="row full-width no-margin banner-msj">
          <div className="col-md-12 no-padding">
            <div style={{ maxWidth: `100%` }}>
              <div className="mensaje-banner">
                <h2 className="no-margin">It's time to start!</h2>
                <h3 className="no-margin">An idea is a good start for a big project</h3>
              </div>
              <Img className="banner-title" fluid={data.imageMensaje.childImageSharp.fluid} />
            </div>
            <p></p>
          </div>
        </div>
        <WebPlans />
        <div id="contact-us" className="row full-width footer no-margin">
          <div className="col-md-6 col-sm-12">
            <FeedInstagram />
          </div>
          {/* Add class form for flex, justify, align center*/}
          <div className="col-md-6 col-sm-12 form">
            <ContactForm />
          </div>
        </div>
        <EmailContact email="info@borodigital.com" />
      </Layout>
    )
  }
}

export const query = graphql`
    query {
      imageMensaje: file(relativePath: { eq: "images/mensaje.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageBannerHome: file(relativePath: { eq: "images/menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `

export default IndexPage
