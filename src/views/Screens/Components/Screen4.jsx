import React from 'react';
import BgDefault from 'assets/bg.png';
import SectionThankYou from 'components/Sections/SectionThankYou';

const propTypes = {};

const Screen4 = ({ isActive }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="screen-3">
      <div
        className="bg-full-screen"
        style={{
          backgroundImage: `url(${BgDefault})`,
          filter: 'unset',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      />

      <SectionThankYou isActive={isActive} />
    </div>
  );
};

Screen4.propTypes = propTypes;
export default Screen4;
