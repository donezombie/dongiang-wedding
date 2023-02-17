import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import SwipeRightGif from 'assets/swipe-right.png';

const propTypes = {};

const DialogIntroduce = ({ open, toggle }) => {
  //! State

  //! Function

  //! Render
  return (
    <Modal isOpen={open} toggle={toggle} className="modal-introduce">
      <ModalBody>
        <div>
          <span style={{ display: 'flex', justifyContent: 'center' }}><img alt="swipe" src={SwipeRightGif} style={{ width: '100%' }} /></span>

          <p style={{ color: '#fff', marginTop: 14 }}>Vuốt phải / trái để xem thêm trang</p>
        </div>
      </ModalBody>
    </Modal>
  );
};

DialogIntroduce.propTypes = propTypes;
export default React.memo(DialogIntroduce);
