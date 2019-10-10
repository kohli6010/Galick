import React from 'react';

class HoverComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'absolute',
        };
	}
	
    render() {
		return (
			<div className='hover-component'>
                <div className='contact'>Contact</div>
                <div className='donate'>Donate</div>
                <div className='contribute'>Contribute</div>
            </div>
        );
    }
}

export default HoverComponent;
