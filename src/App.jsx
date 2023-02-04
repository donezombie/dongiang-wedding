import React from 'react';

// import SectionMain from 'components/Sections/SectionMain';
// import SectionInvitation from 'components/Sections/SectionInvitation';
// import SectionThankYou from 'components/Sections/SectionThankYou';
// import SectionMainCharacter from 'components/Sections/SectionMainCharacter';
// import SectionAlbums from 'components/Sections/SectionAlbums';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './scss/styles.scss';

import MobileScreen from 'views/Screens/MobileScreen';

const App = () => {
  console.log("VERSION_APP: 0.0.1");
  //! State
  // useLayoutEffect(() => {
  //   if (window.AOS) {
  //     window.AOS.init();
  //   }
  // }, []);

  //! Render
  return <MobileScreen />;

  // if (isMobile) {
  //   return <MobileScreen />;
  // }

  // return (
  //   <div className="main-page">
  //     <SectionMain />
  //     <SectionInvitation />
  //     <SectionMainCharacter />
  //     <SectionAlbums />
  //     <SectionThankYou />
  //   </div>
  // );
};

export default App;
