import React, { Component } from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image";
import "../scss/index.scss";
import SEO from "../components/seo";
import Layout from "../componentsEsp/layout";
import Aboutus from "../componentsEsp/About";
import ContactForm from "../componentsEsp/ContactForm";
import OurServices from "../componentsEsp/OurServices";
import BannerHome from "../componentsEsp/utils/BannerHome";
// import FeedInstagram from "../components/FeedInstagram";
import EmailContact from "../components/utils/EmailContact";
import WebPlans from "../componentsEsp/WebPlans";
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
					img={data.imageBannerHomeEsp}
					textColor={"#ffffff"}
					title={"Da el primer paso y alcanza tus metas"}
					textButton={"Inicio"}
					subtitleButton={"Cuentanos tu proyecto"}
				/>
				<Aboutus />
				<OurServices />
				<div className="row full-width no-margin banner-msj">
					<div className="col-md-12 no-padding">
						<div style={{ maxWidth: `100%` }}>
							<div className="mensaje-banner">
								<h2 className="no-margin">Es momento de comenzar!</h2>
								<h3 className="no-margin">Una idea para un gran proyecto</h3>
							</div>
							<Img
								className="banner-title"
								fluid={data.imageMensajeEsp.childImageSharp.fluid}
							/>
						</div>
						<p />
					</div>
				</div>
				<WebPlans />
				<div id="contact-us" className="row full-width footer no-margin">
					<div className="col-md-6 col-sm-12">{/* <FeedInstagram /> */}</div>
					{/* Add class form for flex, justify, align center*/}
					<div className="col-md-6 col-sm-12 form">
						<ContactForm />
					</div>
				</div>
				<EmailContact email="info@borodigital.com" />
			</Layout>
		);
	}
}

export const query = graphql`
	query {
		imageMensajeEsp: file(relativePath: { eq: "images/mensaje.png" }) {
			childImageSharp {
				fluid(maxWidth: 1600, maxHeight: 550) {
					...GatsbyImageSharpFluid
				}
			}
		}
		imageBannerHomeEsp: file(relativePath: { eq: "images/menu.png" }) {
			childImageSharp {
				fluid(maxWidth: 1600, maxHeight: 750) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default IndexPage;
