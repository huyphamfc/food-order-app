import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartItem.module.scss';
import { Button } from 'components';
import { increaseMeal, decreaseMeal } from 'store';

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

function CartItem(props: CartItemProps) {
  const { id, name, price, amount } = props;

  const dispatch = useDispatch();

  const handleAddMeal = () => {
    dispatch(increaseMeal(id));
  };

  const handleRemoveMeal = () => {
    dispatch(decreaseMeal(id));
  };

  return (
    <li className={styles.cart}>
      <div>
        <p className={styles.cart__name}>{name}</p>
        <span className={styles.cart__price}>${price}</span>
        <span className={styles.cart__amount}>x{amount}</span>
      </div>
      <div>
        <Button outline onClick={handleRemoveMeal}>
          -
        </Button>
        <Button outline onClick={handleAddMeal}>
          +
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
