import { useState } from 'react';

const useModal = (value = false) => {
  const [isOpen, setIsOpen] = useState(value);
  const [closing, setClosing] = useState(false);

  function handleClick() {
    if (isOpen) setClosing(true);
    else setClosing(false);
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    closing,
    handleClick,
  };
};

export default useModal;
