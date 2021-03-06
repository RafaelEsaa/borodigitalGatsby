import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Link as Linkscroll } from "react-scroll";
import ReactCountryFlag from "react-country-flag";
import MenuIcon from "@material-ui/icons/Menu";

import dataMenu from "../data/menu.json";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTop: true,
			showMenuResponsive: false,
		};
	}

	componentDidMount() {
		document.addEventListener("scroll", () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
		});
	}

	handleMenuResponsive() {
		this.setState({ showMenuResponsive: !this.state.showMenuResponsive });
	}

	render() {
		//todas las imagenes, nombre del logo, path de la ruta
		const { data, logo } = this.props;
		let location = this.props.location;
		const resultLogo = data.allFile.edges
			.map((value) => {
				if (value.node.childImageSharp.fluid.src.match(logo)) {
					return value.node.childImageSharp;
				} else {
					return false;
				}
			})
			.filter((value) => value !== false);

		const optionsMenu = dataMenu.menu.map((value, key) => {
			if (value.id) {
				if (location.href == process.env.GATSBY_HOSTNAME) {
					return (
						<li className="nav-item active no-margin" key={key}>
							<Linkscroll
								activeClass="active font-menu font-weigth"
								className={`active ${
									this.state.isTop ? "font-menu" : "font-menu-fixed"
								}`}
								to={value.id}
								spy={true}
								smooth={true}
								offset={-150}
								duration={900}
								id={value.id}
							>
								{value.title}
							</Linkscroll>
						</li>
					);
				} else {
					return (
						<li className="nav-item active no-margin" key={key}>
							<Link
								className={`active ${
									this.state.isTop ? "font-menu" : "font-menu-fixed"
								}`}
								to={"/#" + value.id}
							>
								{value.title}
							</Link>
						</li>
					);
				}
			} else if (location.pathname === value.link) {
				return (
					<li className="nav-item active no-margin" key={key}>
						<Link
							className={`active ${
								this.state.isTop ? "font-menu" : "font-menu-fixed"
							}`}
							to={value.link}
						>
							{value.title}
						</Link>
					</li>
				);
			} else {
				return (
					<li className="nav-item active no-margin bb" key={key}>
						<Link
							className={`active ${
								this.state.isTop ? "font-menu" : "font-menu-fixed"
							}`}
							to={value.link}
						>
							{value.title}
						</Link>
					</li>
				);
			}
		});

		return (
			<nav
				className={`navbar navbar-expand-lg navbar-light menu ${
					this.state.isTop ? "bg-menu" : "bg-menu-notop"
				} ${this.props.menuFixed ? "fixed-top" : ""}`}
			>
				<Link to={"/"}>
					<img
						src={resultLogo[0].fluid.src}
						className="logo-menu no-margin"
						alt="logo"
					/>
				</Link>
				<button
					onClick={() => this.handleMenuResponsive()}
					className="icon-burguer navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<MenuIcon />
				</button>
				<div
					className={
						this.state.showMenuResponsive
							? "collapse-menu-show navbar-collapse"
							: "collapse-menu navbar-collapse"
					}
				>
					<ul className="navbar-nav ml-auto">
						{optionsMenu}
						<li className="font-menu no-margin">
							<Link to={"/"}>
								<ReactCountryFlag code="us" svg />
							</Link>
						</li>
						<li className="font-menu no-margin">
							<Link to={"/es"}>
								<ReactCountryFlag code="es" svg />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default (props) => {
	return (
		<StaticQuery
			query={graphql`
				{
					all: file(relativePath: { eq: "images/logo-boro.png" }) {
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
					allFile(filter: { relativeDirectory: { eq: "images" } }) {
						edges {
							node {
								childImageSharp {
									fluid(maxWidth: 300) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			`}
			render={(data) => <Menu data={data} {...props} />}
		/>
	);
};
