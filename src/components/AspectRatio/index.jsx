import React from 'react';
import { useMemo } from 'react';

const AspectRatio = ({ ratio, children, style }) => {
  const ratioResult = useMemo(() => {
    if (ratio === '1/1') {
      return { paddingTop: '100%' };
    }

    return { paddingTop: '100%' };
  }, [ratio]);

  return (
    <div className="aspect-ratio" style={{ ...ratioResult, ...style }}>
      <div className="aspect-ratio__content">{children}</div>
    </div>
  );
};

export default AspectRatio;
