// src/StickyDonateButton.js
import React from 'react';
import coffeeIcon from '../images/coffee-icon.svg';

const StickyDonateButton = () => {
    return (
        <div className="sticky-donate-button">
            <a href="https://buymeacoffee.com/shaunpez" target="_blank" rel="noopener noreferrer">
                <img src={coffeeIcon} alt="Buy Me Coffee" className="icon"/>
            </a>
        </div>
    );
};

export default StickyDonateButton;
