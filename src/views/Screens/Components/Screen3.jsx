import React from 'react';
import FlowerTitleGif from 'assets/flower-title.gif';
import classNames from 'classnames';
import { convertLH3ToLH4 } from 'helpers';
import { linkFirstBg } from 'constants/index';

const propTypes = {};

const Screen3 = ({ isActive }) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="screen-3">
      <div
        className="bg-full-screen"
        style={{
          filter: 'blur(4px)',
          backgroundImage: `url(${linkFirstBg})`,
        }}
      />

      <div className="box">
        <img className="mb-3 flower-title" style={{ width: 280 }} src={FlowerTitleGif} alt="tittle" />
        <img
          className="flower"
          alt="flower-left"
          src={convertLH3ToLH4('https://lh3.google.com/u/0/d/1w5Z5K9eeY6HxtSmNjk6qiWIXJxcnAYAY=w3470-h2032-iv1')}
        />

        <div className="main-text">
          <span className={classNames({ 'animate__animated animate__fadeInLeft animate__slow': isActive })}>
            Quý Đôn
          </span>
          <span
            className={classNames({ 'animate__animated animate__fadeIn animate__delay-2s animate__slow': isActive })}
          >
            &
          </span>
          <span className={classNames({ 'animate__animated animate__fadeInRight animate__slow': isActive })}>
            Hương Giang
          </span>
        </div>

        <div className={classNames('sub-text', { 'animate__animated animate__fadeIn animate__delay-3s': isActive })}>
          <span>Được tổ chức vào 11 giờ 00 phút</span>
          <p className="time-wedding">
            <span className="time-with-line-top-bottom">Thứ bảy</span>
            <span className="time-wedding-date">
              <b>18 . 02</b>
            </span>
            <span className="time-with-line-top-bottom">Năm 2023</span>
          </p>
          <p className="time-wedding-real mb-2">(Tức ngày 28 tháng 01 năm Quý Mão)</p>
          <p className="mb-1">
            <b>Tại: Trung tâm tiệc cưới golden palace</b>
          </p>
          <p className="mb-1">Số 319 - Đại lộ Nguyễn Thái Học</p>
          <p>TP. Yên Bái</p>

          <p className="mt-2 mb-4" style={{ textTransform: 'none', fontWeight: 500 }}>
            <i>Rất hân hạnh được đón tiếp!</i>
          </p>

          <div className="family">
            <div>
              <span>
                <b>Nhà trai</b>
              </span>
              <p>Phạm công chính</p>
              <p>Trần thị hằng</p>
            </div>

            <div>
              <span>
                <b>Nhà gái</b>
              </span>
              <p>Đoàn trần hồng</p>
              <p>Trần thị lý</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Screen3.propTypes = propTypes;
export default Screen3;
