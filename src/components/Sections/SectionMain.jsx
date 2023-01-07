import React from 'react';
import FlowerImg from 'assets/flower.png';
import Demo1 from 'assets/demo1.webp';
import { Parallax } from 'react-scroll-parallax';

const SectionMain = () => {
  //! State

  //! Render
  return (
    <section className='main-slider'>
      <div className='main-slider__overlay' />
      <div className='main-slider__bg-img' style={{ backgroundImage: `url(${Demo1})` }} />

      <div className='main-slider__text'>
        <Parallax translateY={[-50, 50]}>
          <img className="animate__animated animate__fadeIn" alt="flower" src={FlowerImg} />
          <p className="animate__animated animate__fadeIn">Đôn & Giang</p>
          <p className="animate__animated animate__fadeIn">WEDDING MEMORIES</p>
        </Parallax>
      </div>
    </section>
  );
};

export default SectionMain;
