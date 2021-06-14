import React from 'react';
import Typed from 'react-typed';
import { Fade } from 'react-awesome-reveal'; 

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="main-info">
				<Fade>
					<h1>UX/UI designer & Front-End Developer</h1>
					<Typed
						className="typed-text"
						strings={["I design mobile apps", "I design features", "I create solutions"]}
						typeSpeed={30}
						backSpeed={40}
						loop
					/>
				</Fade>		
			</div>
		</div>

	)
}

export default Header