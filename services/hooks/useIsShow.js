import { useState } from 'react';

const useModal = (value = false) => {
  const [isShow, setIsShow] = useState(value);

  const handleClick = event => {
    if (event) event.preventDefault();

    const show = !isShow;
    setIsShow(show);
  };

  return {
    isShow,
    handleClick,
  };
};

export default useModal;
