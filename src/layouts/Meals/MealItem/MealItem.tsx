import React from 'react';

import styles from './MealItem.module.scss';
import { Button } from 'components';

type MealItemProps = {
  name: string;
  description: string;
  price: number;
};

function MealItem(props: MealItemProps) {
  const { name, description, price } = props;

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.meal__name}>{name}</h3>
        <p className={styles.meal__description}>{description}</p>
        <span className={styles.meal__price}>${price}</span>
      </div>
      <form className={styles.meal__form}>
        <label>
          Amount: &nbsp;
          <input className={styles.meal__input} type="number" min="1" max="5" defaultValue="1" />
        </label>
        <Button action>+ Add</Button>
      </form>
    </li>
  );
}

export default MealItem;
