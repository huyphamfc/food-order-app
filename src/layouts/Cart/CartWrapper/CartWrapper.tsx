import React from 'react';

import styles from './CartWrapper.module.scss';
import CartItem from '../CartItem';
import { Button } from 'components';

type CartProps = {
  onHandleToggleModal(): void;
};

function CartWrapper({ onHandleToggleModal }: CartProps) {
  const dummyData = [
    {
      id: 'm1',
      name: 'Sushi',
      price: 22.99,
      amount: '1',
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      price: 16.5,
      amount: '1',
    },
  ];

  const meals = dummyData.map(({ id, ...meal }) => <CartItem key={id} {...meal} />);

  return (
    <>
      <div className={styles.cart__overlay} onClick={onHandleToggleModal} />
      <div className={styles.cart__content}>
        <ul>{meals}</ul>
        <div className={styles.cart__total}>
          <span>Total</span>
          <span>$999</span>
        </div>
        <div className={styles.cart__actions}>
          <Button solid onClick={onHandleToggleModal}>
            Close
          </Button>
          <Button solid>Order</Button>
        </div>
      </div>
    </>
  );
}

export default CartWrapper;
