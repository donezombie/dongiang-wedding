import React from 'react';
import { useLayoutEffect } from 'react';

import SectionMain from 'components/Sections/SectionMain';
import SectionInvitation from 'components/Sections/SectionInvitation';
import SectionThankYou from 'components/Sections/SectionThankYou';
import SectionMainCharacter from 'components/Sections/SectionMainCharacter';
import SectionAlbums from 'components/Sections/SectionAlbums';

import 'animate.css';
import './scss/styles.scss';

const App = () => {
  //! State
  useLayoutEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, [])

  //! Render
  return (
    <div className='main-page'>
      <SectionMain />
      <SectionInvitation />
      <SectionMainCharacter />
      <SectionAlbums />
      <SectionThankYou />
    </div>
  );
};

export default App;
