import React from 'react';

const CarouselItem = ({ imgSrc, captionHeader, captionText, buttonText, buttonLink }) => {
  return (
    <div className="carousel-item">
      <img src={imgSrc} className="d-block w-100" alt={captionHeader} />
      <div className="container">
        <div className="carousel-caption">
          <h1>{captionHeader}</h1>
          <p>{captionText}</p>
          <p>
            <a className="btn btn-lg btn-primary" href={buttonLink}>
              {buttonText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
