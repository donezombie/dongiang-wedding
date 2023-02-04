import React from 'react';
import ThankYou from 'assets/thankyou.gif';
import CouplePic from 'assets/couplePic.jpg';
import useToggleDialog from 'hooks/useToggleDialog';
import DialogPay from 'components/Dialogs/DialogPay';
import { linkMap } from 'constants';

import { GrLocation } from 'react-icons/gr';
import { BsPiggyBank } from 'react-icons/bs';
import { BiPhotoAlbum } from 'react-icons/bi';
import { FcIphone } from 'react-icons/fc';
import classNames from 'classnames';

const SectionThankYou = ({ isActive }) => {
  //! State
  const [openPay, togglePay, shouldRenderPay] = useToggleDialog();

  const accessories = [
    {
      label: 'Click để chỉ đường',
      icon: GrLocation,
      onClick: () => {
        window.open(linkMap, '__blank');
      },
    },
    {
      label: 'Xem album cưới',
      icon: BiPhotoAlbum,
      onClick: () => {
        window.open('https://google.com', '__blank');
      },
    },
    {
      label: 'Hòm $, Mừng cưới',
      icon: BsPiggyBank,
      onClick: togglePay,
    },
  ];

  //! Render
  return (
    <section className="footer">
      {shouldRenderPay && <DialogPay open={openPay} toggle={togglePay} />}

      <div className={classNames('footer__couple', { 'animate__animated animate__fadeIn animate__slow': isActive })}>
        <img src={CouplePic} alt="couple-frame" />
      </div>

      <p>Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi! ❤️</p>

      <img className="footer__thank" src={ThankYou} alt="thank-you-gif" />

      <div className="footer-accessories mb-1">
        {accessories.map((el) => {
          return (
            <div key={el.label} className="each-accessory" onClick={el.onClick}>
              <el.icon size={25} className="mb-1" />
              <span>{el.label}</span>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-evenly w-100">
        <span>
          <FcIphone /> Chú rể: <br />
          <span style={{ fontSize: 18, fontWeight: 500 }}>039 5029 800</span>
        </span>
        <span>
          <FcIphone /> Cô dâu: <br />
          <span style={{ fontSize: 18, fontWeight: 500 }}>0969 728 364</span>
        </span>
      </div>
    </section>
  );
};

export default SectionThankYou;
