import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import SwipeGif from 'assets/swipe.gif';

const propTypes = {};

const DialogIntroduce = ({ open, toggle }) => {
  //! State

  //! Function

  //! Render
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalBody>
        <img alt="swipe" src={SwipeGif} style={{ width: '100%' }} />
      </ModalBody>
    </Modal>
  );
};

DialogIntroduce.propTypes = propTypes;
export default React.memo(DialogIntroduce);
