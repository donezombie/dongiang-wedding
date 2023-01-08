import FlowerTitle from 'components/FlowerTitle';
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const images = [
  'http://placeimg.com/1920/1080/nature',
  'http://placeimg.com/1920/1080/nature',
  'http://glanz.starkethemes.com/html/images/wedding/carita_lee/15319753278_2c5a50cb74_k.jpg',
  'http://glanz.starkethemes.com/html/images/wedding/carita_lee/15499990315_b11d1e7c7f_k.jpg'
];

const SectionAlbums = () => {
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

  return (
    <div className="main-albums">
      <FlowerTitle label="Album Hình Cưới" />
      <div className="main-albums__list">
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            alt="img"
            className="each-image"
            role="presentation"
            aria-hidden
          />
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
};

export default SectionAlbums;
