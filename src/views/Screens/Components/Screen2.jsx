import React from 'react';
import BgDefault from 'assets/bg.png';
import SaveDateGif from 'assets/savethedate.gif';
import MiniCalendar from 'components/MiniCalendar';
import FlowerInvitationLeft from 'assets/invitation-left.png';

const propTypes = {};

const Screen2 = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="screen-2">
      <div
        className="bg-full-screen"
        style={{
          backgroundImage: `url(${BgDefault})`,
          filter: 'unset',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="box">
        <img className="save-date" alt="SaveDateGif" src={SaveDateGif} style={{ filter: 'invert(1)', width: 180 }} />
        <MiniCalendar />
        <img className='flower' alt="flower-left" src={FlowerInvitationLeft} />
      </div>
    </div>
  );
};

Screen2.propTypes = propTypes;
export default Screen2;
