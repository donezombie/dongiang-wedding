import React from 'react';
import SectionMain from 'components/Sections/SectionMain';
import SectionInvitation from 'components/Sections/SectionInvitation';

import 'animate.css';
import './scss/styles.scss';

const App = () => {
  //! State

  //! Render
  return (
    <div className='main-page'>
      <SectionMain />
      <SectionInvitation />
    </div>
  );
};

export default App;
