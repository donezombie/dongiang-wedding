import React, { Fragment } from 'react';
import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwipe } from 'providers/SwipeProvider';
import useToggleDialog from 'hooks/useToggleDialog';

import DialogIntroduce from 'components/Dialogs/DialogIntroduce';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

const MobileScreen = () => {
  //! State
  const { setSwiped } = useSwipe();
  const [modal, toggle, shouldRender] = useToggleDialog(false);

  //! Render

  const slides = [
    {
      component: Screen1,
    },
    {
      component: Screen2,
    },
  ];

  return (
    <Fragment>
      {shouldRender && <DialogIntroduce open={modal} toggle={toggle} />}

      <Swiper
        modules={[Pagination, EffectFade]}
        pagination={{
          type: 'progressbar',
        }}
        loop
        className="mySwiper"
        effect="fade"
        spaceBetween={30}
        onSlideChange={(swiper) => {
          const { realIndex } = swiper;
          if (realIndex !== 0) {
            setSwiped(true);
          }
        }}
      >
        {slides.map((el, idx) => {
          return <SwiperSlide key={`${idx}`}>{<el.component key={`${idx}`} />}</SwiperSlide>;
        })}
      </Swiper>
    </Fragment>
  );
};

export default MobileScreen;
