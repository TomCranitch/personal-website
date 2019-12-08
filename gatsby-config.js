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
		`gatsby-transformer-sharp`, 
		`gatsby-plugin-sharp`,
		/* {
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
			},
		},*/
		/*{
		  resolve: `gatsby-plugin-typography`,
		  options: {
		    pathToConfigModule: `src/utils/typography`,
		  },
		},*/
	]
}
