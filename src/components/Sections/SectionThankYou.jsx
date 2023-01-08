import React from 'react';
import ThankYou from 'assets/thankyou.gif';
import CouplePic from 'assets/couplePic.jpg';

const SectionThankYou = () => {
  //! State

  //! Render
  return (
    <section className="footer">
      <div className="footer__couple"  data-aos="zoom-in-up">
        <img
          src={CouplePic}
          alt="couple-frame"
         
        />
      </div>
      
      <img className="footer__thank" src={ThankYou} alt="thank-you-gif" />
    </section>
  );
};

export default SectionThankYou;
