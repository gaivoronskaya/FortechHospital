import { useRef, useEffect } from 'react';

const useFocus = () => {
  const refInput = useRef(null);

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  return refInput;
};

export default useFocus;