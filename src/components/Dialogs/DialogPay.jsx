import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import QrCodeBank1 from 'assets/qrCodeBank1.JPG';
import QrCodeBank2 from 'assets/qrCodeBank2.jpeg';
import { AiOutlineClose } from 'react-icons/ai';

const propTypes = {};

const DialogPay = ({ open, toggle }) => {
  //! State
  const [qrType, setQrType] = useState(0);
  const isChuRe = qrType === 0;
  const isCodau = !isChuRe;

  //! Function

  //! Render
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalBody>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex" style={{ gap: 8 }}>
            <Button outline={isCodau} color={isChuRe ? 'primary' : undefined} onClick={() => setQrType(0)}>
              Chú rể
            </Button>
            <Button outline={isChuRe} color={isCodau ? 'primary' : undefined} onClick={() => setQrType(1)}>
              Cô dâu
            </Button>
          </div>

          <AiOutlineClose size={24} onClick={toggle} />
        </div>

        {isChuRe ? (
          <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt="Don-QR-Bank" src={QrCodeBank1} />
        ) : (
          <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt="Giang-QR-Bank" src={QrCodeBank2} />
        )}
      </ModalBody>
    </Modal>
  );
};

DialogPay.propTypes = propTypes;
export default React.memo(DialogPay);
