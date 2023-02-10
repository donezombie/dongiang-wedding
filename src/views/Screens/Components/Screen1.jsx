import React from 'react';
import firstBg from 'assets/main-bg.jpeg';
import FlowerImg from 'assets/flower.png';
import classNames from 'classnames';

const propTypes = {};

const Screen1 = ({ isActive }) => {
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
        <div className={classNames('flower-img', { 'animate__animated animate__fadeInDown animate__delay-2s animate__slow': isActive })}>
          <img alt="flower" src={FlowerImg} />
        </div>
        <img
          className={classNames('main-img', { 'animate__animated animate__fadeIn animate__delay-2s animate__slow': isActive })}
          src={firstBg}
          alt="don-giang"
        />
        <p
          className={classNames('name',{ 'animate__animated animate__fadeInLeft animate__delay-3s animate__slow': isActive })}
        >
          Đôn & Giang
        </p>
        <p
          className={classNames('wedding-memories', { 'animate__animated animate__fadeInRight animate__delay-3s animate__slow': isActive })}
        >
          WEDDING MEMORIES
        </p>
      </div>
    </div>
  );
};

Screen1.propTypes = propTypes;
export default Screen1;
