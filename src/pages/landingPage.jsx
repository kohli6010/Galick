import React from 'react';
import Nav from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';
import About from '../components/About/About.component';
import SomeFacts from '../components/somefacts/somefacts.components';
import Index from '../components/Index/index.component';

import './landingPage.styles.css';

// class LandingPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             obj: [],
//         };
//     }

//     componentDidMount() {
//         console.log(`i'm called`);
//         fetch('http://localhost:5000/', { mode: 'no-cors' })
//             .then((response) => response)
//             .then((obj) => console.log(obj))
//             .catch((err) => console.log(err));
//     }

//     render() {
//         return <div>{this.state.obj}</div>;
//     }
// }

const LandingPage = () => (
    <div className='landingPage'>
        <Nav />
        <div className='player'>
            <Index />
        </div>
        <About />
        <SomeFacts />
        <Footer />
    </div>
);

export default LandingPage;


