import React from 'react';
import HoverComponent from '../hoverComponent/hoverComponent.component';
import './navbar.styles.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleHover = () => {
        this.setState({ isHovered: !this.state.isHovered });
    };

    render() {
        return (
            <div className='navbar'>
                <div className='logo'>Safety Squad</div>
                <div className='left'>
                    <span className='home'>Home</span>
                    <span className='about'>About</span>
                    <span className='checksafety'>Some Facts</span>
                    <div className='animation' onClick= {this.handleHover}>
                        <span className='dots'>
                            ...
                        </span>
                        <HoverComponent isHovered={this.state.isHovered} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
