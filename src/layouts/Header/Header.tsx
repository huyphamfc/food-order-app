import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import { Button } from 'components';
import { Cart } from 'layouts';
import { RootState } from 'store';

function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { totalAmount } = useSelector((state: RootState) => state.cart);

  const handleToggleModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <Button solid onClick={handleToggleModal}>
          <span>Your Cart</span>
          <span className={styles.header__badge}>{totalAmount}</span>
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
