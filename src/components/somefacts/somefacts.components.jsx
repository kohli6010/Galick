import React from 'react';
import './somefacts.styles.css';

const SomeFacts = () => (
    <div className='facts'>
        <div className='somefacts'>
            <h3>For last 5 years</h3>
            <ul>
                <li>803 Accidents</li>
                <li>620 people killed</li>
                <li>1855 total animal loss</li>
                <li>47% derailment (~400 Accidents)</li>
                <li>Total loss of 1700 crores</li>
            </ul>
        </div>
        <div className='factors'>
            <h3>Factors</h3>
            <ol>
                <li>Negligence of Drivers</li>
                <li>Wildlife on train/rail tracks</li>
            </ol>
		</div>
    </div>
);

export default SomeFacts;
