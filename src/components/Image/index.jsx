import React, { useEffect, useRef, useState } from 'react';

const Image = ({ aspectRatio, ...props}) => {
  const ref = useRef();
  const [height, setHeight] = useState(undefined);

  useEffect(() => {
    if (ref) {
      const width = ref.current.getBoundingClientRect().width;
      if (aspectRatio === '1/1') {
        setHeight(width);
      }
    }
  }, [ref]);

  return <img ref={ref} alt={props.alt} {...props} style={{ ...props.style, height }} />;
};

export default React.memo(Image);
