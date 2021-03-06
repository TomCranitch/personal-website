import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import Head from "../components/head"

import homeStyles from "../styles/index.module.scss"

const HomePage = () => {
	return (
		<div>
			<Head title="Home"/>
			<div className={homeStyles.header}>
				<div className={homeStyles.headerTitle}>
					<p className={homeStyles.headerTitleText}>Hi!</p>
					<p className={homeStyles.headerTitleText}>I'm Tom<span className={homeStyles.bullet}>.</span></p>
				</div>

				<p className={homeStyles.headerSubtitle}>I'm a second year mathematics and computer science student at the University of Queensland. You can find me on <OutboundLink href="https://github.com/TomCranitch" rel="noopener noreferrer" target="_blank">Github</OutboundLink> or <OutboundLink href="https://linkedin.com/in/TomCranitch" rel="noopener noreferrer" target="_blank">LinkedIn</OutboundLink>.</p>

			</div>
			<Layout>

				<h2>Experience</h2>
					<div className={homeStyles.resumeElem}>
						<p className={homeStyles.resumeJob}>Casual Tutor</p>
						<p className={homeStyles.resumeEmployer}>School of Mathematics and Physics, The University of Queensland</p>
						<p className={homeStyles.resumeTime}>Feb. 2019 - Present</p>

						<p className={homeStyles.resumeDesc}>Prepare and deliver classes on first year mathematics and statistics for upto 110 students. Mark and provide feedback on a range of assesment items.</p>
					</div>
					
					<div className={homeStyles.resumeElem}>
						<p className={homeStyles.resumeJob}>Customer Liasion Officer</p>
						<p className={homeStyles.resumeEmployer}>Translink Division, Department of Transport and Main Roads</p>
						<p className={homeStyles.resumeTime}>Feb. 2019 - Present</p>

						<p className={homeStyles.resumeDesc}>Advise customers about signficant dealys, service disruption and changes and provide general assistance to customers.</p>
					</div>
					
				<h2>Skills</h2>
					<h3>Languages</h3>
						<p>Dart and Flutter; Python; Java; C; MATLAB</p>
					<h3>Technologies</h3>
						<p>Git; Vim; SVN; use of Linux Systems</p>
			</Layout>
		</div>
	)
}

export default HomePage
