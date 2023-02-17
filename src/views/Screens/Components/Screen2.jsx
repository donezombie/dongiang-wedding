import React from 'react';
import SaveDateGif from 'assets/savethedate.gif';
import MiniCalendar from 'components/MiniCalendar';
import { linkFirstBg, bgSaveDateLink } from 'constants/index';

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
          backgroundImage: `url(${linkFirstBg})`,
        }}
      />
      <div className="box" style={{ padding: '24px 50px'}}>
        <img className="save-date" alt="SaveDateGif" src={SaveDateGif} style={{ filter: 'invert(1)', width: 180 }} />
        <MiniCalendar />
        <img className='flower' alt="flower-left" src={bgSaveDateLink} />
      </div>
    </div>
  );
};

Screen2.propTypes = propTypes;
export default Screen2;
