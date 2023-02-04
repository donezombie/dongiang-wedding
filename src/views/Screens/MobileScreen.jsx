import React, { Fragment, useEffect, useState } from 'react';
import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwipe } from 'providers/SwipeProvider';
import useToggleDialog from 'hooks/useToggleDialog';

import DialogIntroduce from 'components/Dialogs/DialogIntroduce';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';
import Loading from 'components/Loading';

const MobileScreen = () => {
  //! State
  const { setSwiped } = useSwipe();
  const [indexSlides, setIndexSlides] = useState([0]);
  const [modal, toggle, shouldRender] = useToggleDialog(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //! Render
  const slides = [
    {
      component: Screen1,
    },
    {
      component: Screen2,
    },
    {
      component: Screen3,
    },
    {
      component: Screen4,
    },
  ];

  return (
    <Fragment>
      {shouldRender && <DialogIntroduce open={modal} toggle={toggle} />}

      {loading && <Loading />}

      <Swiper
        modules={[Pagination, EffectFade]}
        pagination={{
          type: 'progressbar',
        }}
        // loop
        className="mySwiper"
        effect="fade"
        spaceBetween={30}
        onSlideChange={(swiper) => {
          const { realIndex } = swiper;
          setIndexSlides([...indexSlides, realIndex]);

          if (realIndex !== 0) {
            setSwiped(true);
          }
        }}
      >
        {slides.map((el, idx) => {
          return (
            <SwiperSlide key={`${idx}`}>
              <el.component key={`${idx}`} isActive={indexSlides.includes(idx)} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default MobileScreen;
