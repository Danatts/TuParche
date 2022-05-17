import { useState } from 'react';

const useModal = () => {
  const [show, setShow] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return {
    toggle,
    show,
  };
};

export default useModal;
