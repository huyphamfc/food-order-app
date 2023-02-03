import React from 'react';

import styles from './Intro.module.scss';
import mealImg from '../../assets/meal.jpg';

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__img}>
        <img src={mealImg} alt="A table is full of delicious food!" />
      </div>
      <div className={styles.intro__text}>
        <h2 className={styles.intro__heading}>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals and enjoy a
          delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
      </div>
    </section>
  );
}

export default Intro;
