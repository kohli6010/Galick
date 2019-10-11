import React from 'react';
import './footer.styles.css';

const Footer = () => (
    <footer>
        <div className='left-part'>
            <h2>CONTACT US!</h2>
            <div className='address'>kohli6010@gmail.com</div>
        </div>
        <div className='right-part'>
            <div className='github'>
                <i className='fab fa-github' />
                <div>Github</div>
            </div>
            <div className='gmail'>
                <i className='far fa-envelope' />
                <div>Gmail</div>
            </div>
            <div className='twitter'>
                <i className='fab fa-twitter' />
                <div>Twitter</div>
            </div>
        </div>
    </footer>
);

export default Footer;
