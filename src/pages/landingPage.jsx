import React from 'react';
import Nav from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';
import About from '../components/About/About.component';
import './landingPage.styles.css';

const LandingPage = () => (
    <div className='landingPage'>
        <Nav />
        <div className='logobackground'>
            <div className='main'>
            </div>
		</div>
		<About/>
		<Footer/>
    </div>
);

export default LandingPage;