import React from 'react';
import './LandingPage.css'; // You’ll add your CSS here

import HacklahomaTitle from '../assets/S1_HacklahomaTitle.png';
import HacklahomaTitle2025 from '../assets/S1_2025Title.png';
import HacklahomaSubtitle from '../assets/S1_HacklahomaSubtitle.png';

import City from '../assets/S1_City.png';
import Clouds from '../assets/S1_Clouds.png';

import MLHBanner from '../assets/S1_MLH-Banner.png';
import ScissorTail from "../assets/S1_ScissorTailLogo.png";

const LandingPage = () => {

    return (
        <div className="landing-page">

            {/* Desktop Layout */}
            <div className="inner-container">

                <img className="title HacklahomaTitle" src={HacklahomaTitle} alt="Hacklahoma Title" />
                <img className="title HacklahomaTitle2025" src={HacklahomaTitle2025} alt="Hacklahoma Title 2025" />
                <img className="title HacklahomaSubtitle" src={HacklahomaSubtitle} alt="Hacklahoma Subtitle" />

                <img className="city City" src={City} alt="City" />
                <img className="city Clouds" src={Clouds} alt="Clouds" />

                <img className="mlhBanner" src={MLHBanner} alt="MLHBanner" />
                <img className="ScissorTail" src={ScissorTail} alt="ScissorTail Logo" />

            </div>

            {/* Mobile Layout */}
            <div className="mobile-container">

            </div>

        </div>
      );
};

export default LandingPage;
