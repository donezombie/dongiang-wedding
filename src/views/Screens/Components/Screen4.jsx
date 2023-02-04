import React from 'react';
import BgDefault from 'assets/bg.png';
import FlowerInvitationRight from 'assets/invitation-right.png';
import FlowerTitleGif from 'assets/flower-title.gif';
import SectionThankYou from 'components/Sections/SectionThankYou';

const propTypes = {};

const Screen4 = (props) => {
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

      <SectionThankYou />
    </div>
  );
};

Screen4.propTypes = propTypes;
export default Screen4;
