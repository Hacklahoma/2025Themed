import React from 'react';
import './LandingPage.css'; // You’ll add your CSS here

// import desktopImage from '../assets/LandingPageDESKTOP.png';
import mobileImage from '../assets/LandingPageMOBILE.png';

import backgroundDots from '../assets/P1_BackgroundDots.png';
import cloudleft from '../assets/P1_CloudLeft.png';
import cloudright from '../assets/P1_CloudRight.png';
import hero1 from '../assets/P1_Hero1.png';
import hero2 from '../assets/P1_Hero2.png';
import hero3 from '../assets/P1_Hero3.png';
import hero4 from '../assets/P1_Hero4.png';
import hero5 from '../assets/P1_Hero5.png';
import hero6 from '../assets/P1_Hero6.png';
import mlhbanner from '../assets/P1_MLH2025.png';
import title2025 from '../assets/P1_Title2025.png';
import titleHacklahoma from '../assets/P1_TitleHacklahoma.png';

import backgroundDotsMobile from '../assets/P1Mobile_BackgroundDots.png';
import cloudleftMobile from '../assets/P1Mobile_CloudLeft.png';
import cloudrightMobile from '../assets/P1Mobile_CloudRight.png';
import hero1Mobile from '../assets/P1Mobile_Hero1.png';
import hero2Mobile from '../assets/P1Mobile_Hero2.png';
import hero3Mobile from '../assets/P1Mobile_Hero3.png';
import hero4Mobile from '../assets/P1Mobile_Hero4.png';
import hero5Mobile from '../assets/P1Mobile_Hero5.png';
import hero6Mobile from '../assets/P1Mobile_Hero6.png';
import mlhbannerMobile from '../assets/P1Mobile_MLH2025.png';
import title2025Mobile from '../assets/P1Mobile_Title2025.png';
import titleHacklahomaMobile from '../assets/P1Mobile_TitleHacklahoma.png';

const LandingPage = () => {

    return (
        <div className="landing-page">

            {/* Desktop Layout */}
            <div className="inner-container">

                {/* Yellow Dots */}
                <img className="backgroundDots" src={backgroundDots} alt="Background Dots" />

                {/* MLH Banner */}
                <img className="mlhBanner" src={mlhbanner} alt="MLH 2025 Season Banner" />

                {/* Cloud Background */}
                <img className="cloudleft" src={cloudleft} alt="Cloud Left Background" />
                <img className="cloudright" src={cloudright} alt="Cloud Right Background" />
                
                {/* Heroes */}
                <img className="hero hero1" src={hero1} alt="Hero 1" />

                <img className="hero hero2" src={hero2} alt="Hero 2" />

                <img className="hero hero3" src={hero3} alt="Hero 3" />

                <img className="hero hero4" src={hero4} alt="Hero 4" />

                <img className="hero hero5" src={hero5} alt="Hero 5" />

                <img className="hero hero6" src={hero6} alt="Hero 6" />

                {/* Title */}
                <img className="title 2025" src={title2025} alt="Title: 2025" />
                <img className="title hacklahoma" src={titleHacklahoma} alt="Title: Hacklahoma" />

            </div>

            {/* Mobile Layout */}
            <div className="mobile-container">

                {/* Yellow Dots */}
                <img className="backgroundDots" src={backgroundDotsMobile} alt="Background Dots" />

                {/* MLH Banner */}
                <img className="mlhBanner" src={mlhbannerMobile} alt="MLH 2025 Season Banner" />

                {/* Cloud Background */}
                <img className="cloudleft" src={cloudleftMobile} alt="Cloud Left Background" />
                <img className="cloudright" src={cloudrightMobile} alt="Cloud Right Background" />
                
                {/* Heroes */}
                <img className="hero hero1" src={hero1Mobile} alt="Hero 1" />

                <img className="hero hero2" src={hero2Mobile} alt="Hero 2" />

                <img className="hero hero3" src={hero3Mobile} alt="Hero 3" />

                <img className="hero hero4" src={hero4Mobile} alt="Hero 4" />

                <img className="hero hero5" src={hero5Mobile} alt="Hero 5" />

                <img className="hero hero6" src={hero6Mobile} alt="Hero 6" />

                {/* Title */}
                <img className="title 2025" src={title2025Mobile} alt="Title: 2025" />
                <img className="title hacklahoma" src={titleHacklahomaMobile} alt="Title: Hacklahoma" />

            </div>

        </div>
      );
};

export default LandingPage;
