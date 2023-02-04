import React from 'react';
import PropTypes from 'prop-types';
import LoadingGif from 'assets/loading.gif';

const propTypes = {};

const Loading = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className='loading'>
      <img src={LoadingGif} alt="loading" />
    </div>
  );
};

Loading.propTypes = propTypes;
export default Loading;
