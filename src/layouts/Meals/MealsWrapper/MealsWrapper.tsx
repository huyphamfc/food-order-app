import React from 'react';

import styles from './MealsWrapper.module.scss';
import MealItem from '../MealItem';
import dummyData from '../dummyData';

function MealsWrapper() {
  const meals = dummyData.map(({ id, ...meal }) => <MealItem key={id} {...meal} />);

  return <ul className={styles.meals}>{meals}</ul>;
}

export default MealsWrapper;
