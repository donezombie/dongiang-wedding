import React from 'react';
import FlowerInvitationLeft from 'assets/invitation-left.png';
import FlowerInvitationRight from 'assets/invitation-right.png';
import SaveDateGif from 'assets/savethedate.gif';
import MiniCalendar from 'components/MiniCalendar';
import { GrLocation } from 'react-icons/gr';

const SectionInvitation = () => {
  //! State
  const linkMap = 'https://goo.gl/maps/zPWhEfv8d9Q1eeTFA';

  //! Render
  return (
    <section className="main-invitation">
      <div className="main-invitation__left">
        <img className="main-invitation__left__flower" alt="left-img" src={FlowerInvitationLeft} />
        <div className="main-invitation__left__box">
          <div className="main-invitation__left__box__save-the-date">
            <img src={SaveDateGif} alt="save-date" />
          </div>
          <div className="main-invitation__left__box__text">
            <p data-aos="fade-down" data-aos-duration="800">
              For the wedding of
            </p>
            <p data-aos="fade-down" data-aos-duration="800">
              Quý Đôn & Đoàn Giang
            </p>
            <p data-aos="fade-down" data-aos-duration="800">
              tại
            </p>
            <p data-aos="fade-down" data-aos-duration="800" style={{ margin: '0.3rem 0' }}>
              Nhà hàng Golden Place Yên Bái
            </p>
            <p data-aos="fade-down" data-aos-duration="800">
              <a
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                href={linkMap}
                target="_blank"
                rel="noreferrer"
              >
                <GrLocation style={{ marginRight: 8 }} /> Xem bản đồ
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="main-invitation__right">
        <img className="main-invitation__right__flower" alt="left-img" src={FlowerInvitationRight} />
        <div className="main-invitation__right__box">
          <MiniCalendar />
        </div>
      </div>
    </section>
  );
};

export default SectionInvitation;
