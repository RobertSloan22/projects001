import React from 'react';
import BootNavbar from './components/BootNavbar';
import JumbotronExamples from './components/JumbotronExamples';
import JustHeroes from './components/JustHeroes';
import BootCarousel from './components/BootCarousel';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TextExtractor from './components/TextExtractor';
import Thumbnails from './components/Thumbnails';

const App = () => {
  return (
    <>
      <BootNavbar />
      <JustHeroes />
      <BootCarousel />
      <Thumbnails />
      <JumbotronExamples />
      <Thumbnails />
      <TextExtractor />
    </>
  );
};

export default App;
