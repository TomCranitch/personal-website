/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Tom Cranitch',
		author: 'Tom Cranitch'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'projects',
				path: `${__dirname}/src/projects/`
			}
		},
		'gatsby-transformer-remark',
		/*{
		  resolve: `gatsby-plugin-typography`,
		  options: {
		    pathToConfigModule: `src/utils/typography`,
		  },
		},*/
	]
}
