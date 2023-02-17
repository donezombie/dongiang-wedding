import React from 'react';
import SaveDateGif from 'assets/savethedate.gif';
import MiniCalendar from 'components/MiniCalendar';
import FlowerInvitationLeft from 'assets/invitation-left.png';
import firstBg from 'assets/main-bg.jpeg';
import bgSaveTheDate from 'assets/bg-save-the-date.jpeg';

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
          filter: 'blur(4px)',
          backgroundImage: `url(${firstBg})`,
        }}
      />
      <div className="box" style={{ padding: '24px 50px'}}>
        <img className="save-date" alt="SaveDateGif" src={SaveDateGif} style={{ filter: 'invert(1)', width: 180 }} />
        <MiniCalendar />
        <img className='flower' alt="flower-left" src={bgSaveTheDate} />
      </div>
    </div>
  );
};

Screen2.propTypes = propTypes;
export default Screen2;
