import React from 'react';

import styles from './CartItem.module.scss';
import { Button } from 'components';

type CartItemProps = {
  name: string;
  price: number;
  amount: string;
};

function CartItem(props: CartItemProps) {
  const { name, price, amount } = props;

  return (
    <li className={styles.cart}>
      <div>
        <p className={styles.cart__name}>{name}</p>
        <span className={styles.cart__price}>${price}</span>
        <span className={styles.cart__amount}>x{amount}</span>
      </div>
      <div>
        <Button outline>-</Button>
        <Button outline>+</Button>
      </div>
    </li>
  );
}

export default CartItem;
