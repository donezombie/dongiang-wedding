import React from 'react';
import firstBg from 'assets/main-bg.jpeg';
import FlowerImg from 'assets/flower.png';

const propTypes = {};

const Screen1 = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="screen-1">
      <div
        className="bg-full-screen"
        style={{
          filter: 'blur(4px)',
          backgroundImage: `url(${firstBg})`,
        }}
      />

      <div className="content">
        <div className="flower-img animate__animated animate__fadeInDown animate__slow">
          <img alt="flower" src={FlowerImg} />
        </div>
        <img className="main-img animate__animated animate__fadeIn animate__slow" src={firstBg} alt="don-giang" />
        <p className="animate__animated animate__fadeInLeft animate__delay-2s animate__slow">Đôn & Giang</p>
        <p className="animate__animated animate__fadeInRight animate__delay-2s animate__slow">WEDDING MEMORIES</p>
      </div>
    </div>
  );
};

Screen1.propTypes = propTypes;
export default Screen1;
