import React from 'react';
import './hoverComponent.styles.css';

class HoverComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className='hover'
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    display: this.props.isHovered ? 'flex' : 'none',
                }}
            >
                <div className='contact'>Contact</div>
                <div className='donate'>Donate</div>
                <div className='contribute'>Contribute</div>
            </div>
        );
    }
}

export default HoverComponent;
