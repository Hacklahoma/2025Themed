import React, { useState } from 'react';
import './AboutPage.css';

import TitleText from '../assets/S2_TitleText.png';
import TitleHighlight from '../assets/S2_TitleHighlight.png';
import BodyText from '../assets/S2_BodyText.png';

import ComicBook from '../assets/S2_ComicBook.png';

// Import images for the carousel
import Image1 from '../assets/images/DSC_0245.jpg';
import Image2 from '../assets/images/DSC_0269.jpg';
import Image3 from '../assets/images/DSC_0265.jpg';
import Image4 from '../assets/images/DSC_0259.jpg';
import Image5 from '../assets/images/DSC_0158.jpg';
import Image6 from '../assets/images/DSC_0146.jpg';
import Image7 from '../assets/images/DSC_0200.jpg';
import Image8 from '../assets/images/DSC_0197.jpg';
import Image9 from '../assets/images/DSC_0250.jpg';

const imageList = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

const AboutPage = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="about-page">
      {/* Desktop Layout */}
      <div className="about-page-desktop">
        <img className="TitleHighlight" src={TitleHighlight} alt="TitleHighlight" />
        <img className="TitleText" src={TitleText} alt="TitleText" />
        <img className="BodyText" src={BodyText} alt="BodyText" />
        <img className="ComicBook" src={ComicBook} alt="ComicBook" />

        {/* Carousel */}
        <section className="image-carousel">
          <div className="carousel">
            <div className="slide-track">
              {imageList.concat(imageList).map((image, index) => (
                <div className="slide" key={index}>
                  <img
                    src={image}
                    alt={`Carousel image ${index}`}
                    onClick={() => setModalImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Layout */}
      <div className="about-page-mobile">
        {/* Mobile content goes here */}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Enlarged view"/>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
