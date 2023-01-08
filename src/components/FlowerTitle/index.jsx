import React from 'react';
import FlowerTitleGif from 'assets/flower-title.gif';

const FlowerTitle = ({ label = ""}) => {
  return (
    <p style={{ textAlign: 'center', margin: '3rem 0', fontFamily: `Great Vibes, cursive` }}>
      <img style={{ width: 280, marginBottom: 6 }} src={FlowerTitleGif} alt="tittle" />
      {label && <p style={{ fontSize: '2.5rem' }}>{label}</p>}
    </p>
  );
};

export default FlowerTitle;
