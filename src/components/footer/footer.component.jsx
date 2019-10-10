import React from 'react';
import './footer.styles.css';

const Footer = () => (
    <footer>
        <div className='left-part'>
            <h2>CONTACT US!</h2>
            <div className='address'>MukundGhar, Kolkata-407368</div>
        </div>
        <div className='right-part'>
            <div className='github'>
                <i class='fab fa-github' />
                <div>Github</div>
            </div>
            <div className='gmail'>
                <i class='far fa-envelope' />
                <div>Gmail</div>
            </div>
            <div className='twitter'>
                <i class='fab fa-twitter' />
                <div>Twitter</div>
            </div>
        </div>
    </footer>
);

export default Footer;
