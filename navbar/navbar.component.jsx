import React from 'react';
import './navbar.styles.css';

class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isHidden: true
		}
	}

	handleClick = () => { 
		this.setState({isHidden: !this.state.isHidden})
	}

	render() { 
		return (
			<div className="navbar">
				<div className="logo">Safety Squad</div>
				<div className="left">
					<span className="home">Home</span>
					<span className="about">About</span>
					<span className="checksafety">Check Safety</span>
					<div className="animation">
						<span className="dots" onClick={this.handleClick}>...</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
