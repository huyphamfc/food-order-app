import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

import HeaderContent from '../HeaderContent';
import { Cart } from 'layouts';

function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setShowModal((state) => !state);
  }, []);

  return (
    <>
      <HeaderContent onHandleToggleModal={handleToggleModal} />
      {showModal &&
        ReactDOM.createPortal(
          <Cart onHandleToggleModal={handleToggleModal} />,
          document.getElementById('cart-modal') as HTMLDivElement,
        )}
    </>
  );
}

export default Header;
