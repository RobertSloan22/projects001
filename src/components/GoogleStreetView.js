import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GoogleStreetView = () => {
  const panoRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDFCqSlD9Oc1TgnslsOtrmY7opuFx7Q2q8';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const handleError = (message) => {
      console.error(message);
      // Provide a default location if geolocation is not available or denied
      const defaultLocation = { lat: 37.7749, lng: -122.4194 }; // San Francisco

      const google = window.google;
      window.panorama = new google.maps.StreetViewPanorama(
        panoRef.current,
        {
          position: defaultLocation,
          pov: { heading: 0, pitch: 0 },
          zoom: 1,
        }
      );
    };

    script.addEventListener('load', () => {
      if (!window.google || !window.google.maps) {
        handleError('Google Maps API failed to load');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const google = window.google;

          window.panorama = new google.maps.StreetViewPanorama(
            panoRef.current,
            {
              position: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              pov: { heading: 0, pitch: 0 },
              zoom: 1,
            }
          );
        },
        (error) => {
          handleError('Geolocation failed or was denied');
        }
      );
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div ref={panoRef} id="pano" style={{ height: '800px', width: '100%' }}></div>
    </div>
  );
};

export default GoogleStreetView;
