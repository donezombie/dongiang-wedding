import React from 'react';
import SectionMain from 'components/Sections/SectionMain';
import SectionInvitation from 'components/Sections/SectionInvitation';
import { useLayoutEffect } from 'react';

import 'animate.css';
import './scss/styles.scss';
import SectionThankYou from 'components/Sections/SectionThankYou';

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
      <SectionThankYou />
    </div>
  );
};

export default App;
