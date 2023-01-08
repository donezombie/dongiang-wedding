import FlowerTitle from 'components/FlowerTitle';
import React from 'react';

const SectionMainCharacter = () => {
  //! State

  //! Render
  return (
    <section className="main-character">
      <FlowerTitle label="Cô dâu & Chú rể" />
      <div className="main-character__info">
        <img
          alt="avatar"
          src="http://glanz.starkethemes.com/html/images/wedding/carita_lee/15499990315_b11d1e7c7f_k.jpg"
        />
        <div className="main-character__info__details">
          <h2>Phạm Phú Quý Đôn</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa accusamus eius.
            Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat unde, facilis natus ex ipsum eius atque
            suscipit fugit.
          </p>
        </div>
      </div>

      <div className="main-character__info reverse">
        <img
          alt="avatar"
          src="http://glanz.starkethemes.com/html/images/wedding/carita_lee/15319753278_2c5a50cb74_k.jpg"
        />
        <div className="main-character__info__details">
          <h2>Phạm Phú Quý Đôn</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa accusamus eius.
            Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat unde, facilis natus ex ipsum eius atque
            suscipit fugit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionMainCharacter;
