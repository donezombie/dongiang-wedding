import React from 'react';
import FlowerImg from 'assets/flower.png';
import Demo1 from 'assets/demo1.webp';
import { Parallax } from 'react-scroll-parallax';

const SectionMain = () => {
  //! State

  //! Render
  return (
    <section className="main-slider">
      <div className="main-slider__overlay" />
      <div className="main-slider__bg-img" style={{ backgroundImage: `url(${Demo1})` }} />

      <div className="main-slider__text">
        <Parallax translateY={[-50, 50]}>
          <div data-aos="fade-down" data-aos-duration="1000">
            <img
              alt="flower"
              src={FlowerImg}
            />
          </div>
          <p data-aos="fade-left"  data-aos-delay="600" data-aos-duration="1500">Đôn & Giang</p>
          <p data-aos="fade-right"  data-aos-delay="900" data-aos-duration="1500">WEDDING MEMORIES</p>
        </Parallax>
      </div>
    </section>
  );
};

export default SectionMain;
