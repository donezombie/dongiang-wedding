import { useCallback, useState } from 'react';

const useToggleDialog = (defaultState = false) => {
  const [open, setOpen] = useState(defaultState);
  const [close, setClose] = useState(defaultState);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
    setTimeout(() => {
      setClose((prev) => !prev);
    }, 500);
  }, []);

  const shouldRender = open || close;

  return [open, toggle, shouldRender];
};

export default useToggleDialog;
