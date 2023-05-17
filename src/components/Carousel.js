import React from 'react';
import CarouselItem from './CarouselItem';
import SRXyolo1 from './SRXyolo1.png';
import SRXyolo2 from './SRXyolo2.png';
import Alerted1 from './Alerted1.png';
import Alerted2 from './Alerted2.png';
import  './Carousel.css';

const Carousel = () => {
  return (
    <container>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
        </div>
          <CarouselItem
            imgSrc={SRXyolo1}
            captionHeader="Vehicle proximity alert system."
            captionText="Detect and identify all vehicles in the proximity of Cadillac SRX while calculating the distance to detected vehicles ."
            buttonText="Learn more"
            buttonLink="#"
          />
          <CarouselItem
            imgSrc={SRXyolo2}
            captionHeader="Trigger Warning alert when vehicle is determined to be closing distance of 15 ft ."
            captionText="."
            buttonText="Browse gallery"
            buttonLink="#"
          />
          <CarouselItem
              imgSrc={Alerted2}
              captionHeader="Vehicle proximity alert system."
              captionText="Detect and identify all vehicles in the proximity of Cadillac SRX while calculating the distance to detected vehicles ."
              buttonText="Learn more"
              buttonLink="#" 
         />
          <CarouselItem
            imgSrc={Alerted1}
            captionHeader="Trigger Warning alert when vehicle is determined to be closing distance of 15 ft ."
            captionText="."
            buttonText="Browse gallery"
            buttonLink="#"
          />
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </container>
  );
};

export default Carousel;
