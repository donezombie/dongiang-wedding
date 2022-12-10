import React from 'react';
import FlowerImg from 'assets/flower.png';
import Demo1 from 'assets/demo1.webp';

import 'animate.css';
import './scss/styles.scss';

const App = () => {
  //! Render
  return (
    <div className='main-page'>
      <section className='main-slider'>
        <div className='main-slider__overlay' />
        <div className='main-slider__bg-img' style={{ backgroundImage: `url(${Demo1})` }} />

        <div className='main-slider__text'>
          <img className="animate__animated animate__fadeIn" alt="flower" src={FlowerImg} />
          <p className="animate__animated animate__fadeIn">Đôn & Giang</p>
          <p className="animate__animated animate__fadeIn">WEDDING PHOTOGRAPHY</p>
        </div>

      </section>
    </div>
  );
};

export default App;
