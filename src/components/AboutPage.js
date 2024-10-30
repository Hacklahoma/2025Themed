import React from 'react';
import './AboutPage.css';

import TitleText from '../assets/S2_TitleText.png';
import TitleHighlight from '../assets/S2_TitleHighlight.png';
import BodyText from '../assets/S2_BodyText.png';

import ComicBook from '../assets/S2_ComicBook.png';

const AboutPage = () => {

    return (
        <div className="about-page">

            {/* Desktop Layout */}
            <div className="about-page-desktop">

                <img className="TitleHighlight" src={TitleHighlight} alt="TitleHighlight" />
                <img className="TitleText" src={TitleText} alt="TitleText" />
                <img className="BodyText" src={BodyText} alt="BodyText" />

                <img className="ComicBook" src={ComicBook} alt="ComicBook" />

            </div>

            {/* Mobile Layout */}
            <div className="about-page-mobile">

            </div>

        </div>
      );
};

export default AboutPage;
