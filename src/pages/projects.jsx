import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import Head from "../components/head"

import ProjectsStyles from "../styles/projects.module.scss"

const ProjectsPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				nodes {
					frontmatter {
						name
						technologies
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					html
				}
			}
		}
	`)

	console.log(data);


	return (
		<Layout>
			<Head title="Projects"/>
			<h1>Projects</h1>
			<p>Here are some software projects I've been working on. You can view everything I've been working on, including many of my uni assignments on my <OutboundLink href="https://github.com/TomCranitch" target="_blank" rel="noopener noreferrer">Github</OutboundLink>.</p>
			<ol>
				{data.allMarkdownRemark.nodes.map((node, i) => {
					return (
						<li className={ `${ProjectsStyles.elem} ${i % 2 === 0 ? ProjectsStyles.left : ProjectsStyles.right}` }>
							<Img fluid={ node.frontmatter.image.childImageSharp.fluid } className={ ProjectsStyles.featureImg }/>
							<div className={ ProjectsStyles.content }>
								<h2>{ node.frontmatter.name }</h2>
								<p className={ProjectsStyles.tech}>{ node.frontmatter.technologies }</p>
								<div dangerouslySetInnerHTML={{ __html: node.html }}></div>
							</div>
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}

export default ProjectsPage
