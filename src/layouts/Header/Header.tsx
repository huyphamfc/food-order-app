import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './Header.module.scss';
import { Button } from 'components';
import { Cart } from 'layouts';

function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <Button solid onClick={handleToggleModal}>
          <span>Your Cart</span>
          <span className={styles.header__badge}>9</span>
        </Button>
      </header>
      {showModal &&
        ReactDOM.createPortal(
          <Cart onHandleToggleModal={handleToggleModal} />,
          document.getElementById('cart-modal') as HTMLDivElement,
        )}
    </>
  );
}

export default Header;
