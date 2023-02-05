import React, { useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import styles from './MealItem.module.scss';
import { Button } from 'components';
import { addMeal } from 'store';

type MealItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

function MealItem(props: MealItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { id, name, description, price } = props;

  const handleAddMeal = (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const payload = {
      id,
      name,
      price,
      amount: +inputRef.current.value,
    };

    dispatch(addMeal(payload));
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.meal__name}>{name}</h3>
        <p className={styles.meal__description}>{description}</p>
        <span className={styles.meal__price}>${price}</span>
      </div>
      <form className={styles.meal__form} onSubmit={handleAddMeal}>
        <label>
          Amount: &nbsp;
          <input
            className={styles.meal__input}
            ref={inputRef}
            type="number"
            min="1"
            max="5"
            defaultValue="1"
          />
        </label>
        <Button action>+ Add</Button>
      </form>
    </li>
  );
}

export default MealItem;
