import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './HeaderContent.module.scss';
import { Button } from 'components';
import { RootState } from 'store';

type HeaderContentProps = {
  onHandleToggleModal(): void;
};

function HeaderContent({ onHandleToggleModal }: HeaderContentProps) {
  const { totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <header className={styles.header}>
      <h1>Meals</h1>
      <Button solid onClick={onHandleToggleModal}>
        <span>Your Cart</span>
        <span className={styles.header__badge}>{totalAmount}</span>
      </Button>
    </header>
  );
}

export default memo(HeaderContent);
