import React from "react"

import {Link} from "gatsby"

import "../styles/all.scss"

import layoutStyles from "../styles/layout.module.scss"

const Layout = (props) => {
	return (
		<div className={layoutStyles.container}>
			<div className={layoutStyles.menu}>
				<p className={layoutStyles.name}>Tom Cranitch</p>
				<nav>
					<ul>
						<li>	
							<Link to="/">Home</Link>
						</li>
						<li>	
							<Link to="/projects">Projects</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={layoutStyles.content}>
				{props.children}
			</div>
		</div>
	)
}

export default Layout
