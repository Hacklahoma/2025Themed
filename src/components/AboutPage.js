import React from 'react';
import './AboutPage.css';

// Desktop Assets
import TitleText from '../assets/S2_TitleText.png';
import TitleHighlight from '../assets/S2_TitleHighlight.png';
import BodyText from '../assets/S2_BodyText.png';

import ComicBook from '../assets/S2_ComicBook.png';

//Mobile Assets
import MobileTitleText from '../assets/MS2_TitleText.png';
import MobileTitleHighlight from '../assets/MS2_TitleHighlight.png';
import MobileBodyText from '../assets/MS2_BodyText.png';

import MobileComicBook from '../assets/MS2_ComicBook.png';

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

                <img className="TitleHighlight" src={MobileTitleHighlight} alt="TitleHighlight" />
                <img className="TitleText" src={MobileTitleText} alt="TitleText" />
                <img className="BodyText" src={MobileBodyText} alt="BodyText" />

                <img className="ComicBook" src={MobileComicBook} alt="ComicBook" />

            </div>

        </div>
      );
};

export default AboutPage;
