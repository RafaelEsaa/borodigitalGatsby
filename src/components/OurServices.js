import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Link as Linkscroll } from "react-scroll";

import dataOurServices from "../data/services/services.json";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import CodeIcon from "@material-ui/icons/Code";
import DescriptionIcon from "@material-ui/icons/Description";

const OurServices = ({ data }) => {
	//data from static query image for services
	const imageServices = data.imageServices.edges;

	console.log("DATA: ", data.imageServices.edges);

	const divOfServices = dataOurServices.services.map((data, i) => {
		if (data.link) {
			return (
				<Link to={data.link}>
					<div key={i} className="flex-services">
						{data.icons == "HowToRegIcon" ? (
							<HowToRegIcon />
						) : data.icons == "CodeIcon" ? (
							<CodeIcon />
						) : data.icons == "DescriptionIcon" ? (
							<DescriptionIcon />
						) : null}
						<h2 className="text-center text-services no-margin">
							{data.title}
						</h2>
					</div>
				</Link>
			);
		} else {
			return (
				<Linkscroll
					to={data.id}
					spy={true}
					smooth={true}
					offset={1000}
					duration={900}
				>
					<div key={i} className="flex-services">
						{data.icons == "HowToRegIcon" ? (
							<HowToRegIcon />
						) : data.icons == "CodeIcon" ? (
							<CodeIcon />
						) : data.icons == "DescriptionIcon" ? (
							<DescriptionIcon />
						) : null}
						<h2 className="text-center text-services no-margin">
							{data.title}
						</h2>
					</div>
				</Linkscroll>
			);
		}
	});

	console.log(dataOurServices);
	return (
		<div className="row full-width our-services no-margin" id="services">
			<div className="col-md-6 franja-radius-right">
				<h1 className="no-margin text-center title-section">
					{dataOurServices.title}
				</h1>
			</div>
			<div className="col-md-12">
				<div className="services">{divOfServices}</div>
			</div>
		</div>
	);
};

export default (props) => {
	return (
		<StaticQuery
			query={graphql`
				query {
					imageServices: allFile(
						filter: { relativeDirectory: { eq: "images" } }
					) {
						edges {
							node {
								id
								relativePath
								childImageSharp {
									id
									fluid(maxWidth: 100) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			`}
			render={(data) => <OurServices data={data} {...props} />}
		/>
	);
};
