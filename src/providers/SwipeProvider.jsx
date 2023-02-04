import React, { useMemo, useState } from 'react';

const SwipeContext = React.createContext({});

export const useSwipe = () => React.useContext(SwipeContext);

const SwipeProvider = ({ children }) => {
  const [isSwiped, setSwiped] = useState(false);

  const value = useMemo(() => {
    return {
      isSwiped,
      setSwiped,
    };
  }, [isSwiped, setSwiped]);

  return <SwipeContext.Provider value={value}>{children}</SwipeContext.Provider>;
};

export default SwipeProvider;
