import React, { Component } from 'react';
import { graphql, Link } from "gatsby";

import SEO from '../components/seo'
import Layout from '../components/layout'
import EmailContact from '../components/utils/EmailContact'

class Blog extends Component {
    render() {
        const { location, data } = this.props;
        const dataPosts = data.allMarkdownRemark.edges;
        const dataAllFile = data.allFile.edges;

        const posts = dataPosts.map((data, key) => {
            const imgPost = dataAllFile.map((value) => {
                if (value.node.childImageSharp.fluid.src.match(data.node.frontmatter.imgthumbnail)) {
                    return value.node.childImageSharp.fluid.src
                } else {
                    return false
                }
            }).filter(x => x !== false)
            return (
                <div className="col-md-4 index-blog" key={key}>
                    <Link to={data.node.fields.slug} className="style-link">
                        <img src={imgPost} className="img-index-post" alt="img-post" />
                        <h2 className="pt-4">{data.node.frontmatter.title}</h2>
                        <p className="no-margin">{data.node.excerpt}</p>
                        <div className="div-date">
                            {/* <small className="text-right">{data.node.fields.readingTime.text}</small> */}
                            <br />
                            <small className="text-right">{data.node.frontmatter.date}</small>
                        </div>
                    </Link>
                </div>
            )
        });

        return (
            <Layout location={location} menuFixed={false}>
                <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
                <div className="row full-width no-margin pb-5">
                    <div className="col-md-12 banner-page-post">
                        <h1 className="text-center no-margin">Blog</h1>
                    </div>
                </div>
                <div className="row full-width no-margin pb-4">
                    <div className="col-md-12">
                        <h1 className="text-center title-banner-post">Lasts Posts</h1>
                    </div>
                </div>
                <div className="row full-width no-margin section-blog">
                    {posts}
                </div>
                <EmailContact email="info@borodigital.com" />
            </Layout>
        )
    }
}

export const query = graphql`
    query {
            allMarkdownRemark (filter:{fields:{langKey:{eq:"en"}}}){
                edges {
                    node {
                        id
                        html
                        excerpt
                        frontmatter {
                            title
                            date
                            imgthumbnail
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            allFile(filter:{relativeDirectory:{eq:"images"}}){
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
    `

export default Blog;