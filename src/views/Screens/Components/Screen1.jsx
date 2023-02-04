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
        className='bg-full-screen'
        style={{
          filter: 'blur(5px)',
          backgroundImage: `url(${firstBg})`,
        }}
      />

      <div className="content">
        <div className="flower-img" data-aos="fade-down" data-aos-duration="1000">
          <img alt="flower" src={FlowerImg} />
        </div>
        <img className="main-img" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-down" src={firstBg} alt="hihi" />
        <p data-aos="fade-left" data-aos-delay="600" data-aos-duration="1500">
          Đôn & Giang
        </p>
        <p data-aos="fade-right" data-aos-delay="900" data-aos-duration="1500">
          WEDDING MEMORIES
        </p>
      </div>
    </div>
  );
};

Screen1.propTypes = propTypes;
export default Screen1;
