import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<Helmet>
			<title>{`${title} | ${data.site.siteMetadata.title}`}</title>
			<meta name="google-site-verification" content="dg_20WpNyHVqoFcyzXEu3wuwh3m7LDryyOD_8dICD20" />
		</Helmet>
	)
}

export default Head
