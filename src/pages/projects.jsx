import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ProjectsPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				nodes {
					frontmatter {
						name
						technologies
						image
					}
					html
				}
			}
		}
	`)

	return (
		<Layout>
			<Head title="Projects"/>
			<h1>Projects</h1>
			<ol>
				{data.allMarkdownRemark.nodes.map((node) => {
					return (
						<li>
							<h2>{node.frontmatter.name}</h2>
							<p>{node.frontmatter.technologies}</p>
							<div dangerouslySetInnerHTML={{ __html: node.html }}></div>
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}

export default ProjectsPage
