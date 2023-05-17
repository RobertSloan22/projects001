import React from 'react';
import './JumbotronExamples.css';
import GoogleStreetView from './GoogleStreetView';




const JumbotronExamples = () => {
  return (
 <div>
<div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">React.dev Online programing resource </h1>
          <iframe
            src="https://react.dev/"
            title="REACT.DEV RESOURCE MANAGEMENT"
            width="100%"
            height="800"
            style={{ border: '5PX' }}
          ></iframe>
        </div>
      </div>
      
        <div className="b-example-divider"></div>
      <div>
      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">Helium Network Explorer</h1>
          <iframe
            src="https://explorer.helium.com/"
            title="Helium Network Explorer"
            width="200px"
            height="200px"
            style={{ border: 'none' }}
          ></iframe>
        </div>ary Side Bar.
        
        
      </div>
      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Interactive Google StreetView</h1>
          <p className="lead">
           This is taking your location and returning your immediate surrounding area.
          </p>
          <div style={{ height: '600px', width: '100%', overflow: 'hidden', position: 'relative' }}>
            <GoogleStreetView />
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">Web3 Schools</h1>
          <iframe
            src="https://www.w3schools.com"
            title="WEB3-Schools"
            width="100%"
            height="500"
            style={{ border: '5PX' }}
          ></iframe>
        </div>
      </div>
      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">Patrick Sloans WebSite</h1>
          <iframe
            src="https://robertsloan22.github.io/PatrickSloanPhotography.io/"
            title="O'reilly auto parts Autorepair"
            width="100%"
            height="500"
            style={{ border: '5PX' }}
          ></iframe>
        </div>
      </div>
      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">The Daily Wire</h1>
          <iframe
            src="https://www.dailywire.com"
            title="O'reilly auto parts Autorepair"
            width="100%"
            height="800"
            style={{ border: '5PX' }}
          ></iframe>
        </div>
      </div>
              <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <h1 className="text-body-emphasis">PRODEMAND- AUTOMOTIVE DIAGNOSTICS </h1>
          <iframe
            src="https://www1.prodemand.com/Main/Index#|||||||||||||||||/Home"
            title="Prodemand Automotive Diagnostics"
            width="100%"
            height="800"
            style={{ border: '5PX' }}
          ></iframe>
        </div>
      </div>
      
        <div className="b-example-divider"></div>
<div className="container my-5">
  <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
    <button
      type="button"
      className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
      aria-label="Close"
    ></button>
    <h1 className="text-body-emphasis">Space News</h1>
    <iframe
      src="https://www.spacenews.com/"
      title="Prodemand Automotive Diagnostics"
      width="100%"
      height="800"
      style={{ border: '5PX' }}
    ></iframe>
  </div>
</div>

  <div className="b-example-divider"></div>
    </div>
    </div>
  );
};

export default JumbotronExamples;
