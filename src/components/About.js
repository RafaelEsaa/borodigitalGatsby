import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Container from "../components/Container";
import TitleSection from "./utils/TitleSection";
import dataAbout from "../data/about.json";

const About = ({ data }) => {
	return (
		<div className="row full-width about-us no-margin">
			{/* <Container> */}
			<div className="col-md-6">
				<TitleSection data={dataAbout} title="About Us" hr="50%" />
				<p className="text-aboutus text-center">{dataAbout.description}</p>
			</div>
			<div className="col-md-6">
				<div style={{ maxWidth: `700px` }}>
					<Img fluid={data.fileName.childImageSharp.fluid} />
				</div>
			</div>
			{/* </Container> */}
		</div>
	);
};

export default (props) => (
	<StaticQuery
		query={graphql`
			query {
				fileName: file(relativePath: { eq: "images/quienes-somos.png" }) {
					childImageSharp {
						fluid(maxWidth: 1100, maxHeight: 750) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={(data) => <About data={data} {...props} />}
	/>
);
