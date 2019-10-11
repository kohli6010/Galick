import React, { Component } from 'react';
import { Player } from 'video-react';
import '/../Users/Rahul/Desktop/Galick/node_modules/video-react/dist/video-react.css';

class Index extends Component {
    render() {
        return (
            <Player playsInline poster='/assets/poster.png' src='/../Users/Rahul/Downloads/Drowsiness_Detection.flv' />
        );
    }
}

export default Index;
