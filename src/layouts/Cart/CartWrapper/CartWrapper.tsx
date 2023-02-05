import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CartWrapper.module.scss';
import CartItem from '../CartItem';
import { Button } from 'components';
import { RootState } from 'store';

type CartProps = {
  onHandleToggleModal(): void;
};

function CartWrapper({ onHandleToggleModal }: CartProps) {
  const { meals } = useSelector((state: RootState) => state.cart);

  const mealsUI = meals.map((meal) => <CartItem key={meal.id} {...meal} />);

  const total = meals
    .reduce((prevTotal, { price, amount }) => prevTotal + price * amount, 0)
    .toFixed(2);

  return (
    <>
      <div className={styles.cart__overlay} onClick={onHandleToggleModal} />
      <div className={styles.cart__content}>
        <ul>{mealsUI}</ul>
        <div className={styles.cart__total}>
          <span>Total</span>
          <span>${total}</span>
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
