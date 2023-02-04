import React, { useCallback, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { convertThumbnailToOriginGGDrive, convertLH3ToLH4 } from 'helpers';
import Image from 'components/Image';
import FsLightbox from 'fslightbox-react';

const propTypes = {};

const imagesThumbNail = [
  'https://lh3.google.com/u/0/d/1iWIbGRYycBf0kmmGvBs_oOReTtZjGxAz=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1x9p7Fdf8j-qcc_tvAOknRTTByFbfWcJ3=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1FvmU30q5lvcmUmaKqElENfWyJXS537qr=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1tPS7DoGp5eqn9triCWPa9DAQ_MMFegQ-=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1nY9GSL-Ra-BCiz1XVrGoWKM5ZXr__Hv0=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1Co4bL-ijheZkpeOOz4P-WOphhNuBhJk7=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1BaOVPZqBu_HsWcJ1m7bLBZpR6hhZH2QF=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1gekAzT_Q2usci3Ut5kQ8v0u_eMFYZ2hn=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1mTCDY_UigjoU1fsjOg7L4rx_IQNHZGkk=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1JtArJYb6grJ6gLfGmT2l7LVxrRDdMmd9=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1Ib99hYWa645SNByT9zsb65Ha-M65q3QN=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1BjJIO2qekHaJyppfpC7dr-Uw3avzHOeQ=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1ThX9Tx1p6iSUyImqqCJ285GPVCmCLbcZ=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1NH3WktLxwET41LH9CKbC1BsxTmhdoqr7=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1mB3cZqTKJgbzdvtnRNqqYzfZNoNR0tVB=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1aWwVfq0oknw5tR6roldHrPQogHjj8FZR=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1JgcXPlomQQuTkpHg4s38Tw4J5NUKzERG=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1rp6GqFkGas4V2kX1GYrPSidlgQAw34Ew=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1BE8uHYS6u8z5TxKHhLjui51eMezH7AmG=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1o6ht4WxhV6Yosm3oVgjvFA4kRZ4TkQWb=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1aHP3Qe6mpeZZyX7eOzPsVFL475XUHNdS=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1hHSHeMYl805NiksP6klmjLLEIG9EQRwh=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1aiJnJa9Tn440bdBVC5OUKx6uPJTWfryb=w400-h380-p-k-nu-iv1',
  'https://lh3.google.com/u/0/d/1UhZ_8pnk2ljTeqJQx0feJIFSExiRtryk=w400-h380-p-k-nu-iv1',
].map((src) => convertLH3ToLH4(src));

const images = convertThumbnailToOriginGGDrive(imagesThumbNail);

const DialogGallery = ({ open, toggle }) => {
  //! State
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  //! Function
  const toggler = () => setIsViewerOpen(!isViewerOpen);

  //! Render
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>Album ảnh</ModalHeader>
      <ModalBody>
        <div className="main-albums__list">
          {imagesThumbNail.map((src, index) => (
            <Image
              src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              alt="img"
              className="each-image fixed-ar fixed-ar-1-1"
              role="presentation"
              aria-hidden
              aspectRatio="1/1"
            />
          ))}
        </div>

        <FsLightbox toggler={toggler} sources={images} slide={currentImage + 1} />
      </ModalBody>
    </Modal>
  );
};

DialogGallery.propTypes = propTypes;
export default React.memo(DialogGallery);
