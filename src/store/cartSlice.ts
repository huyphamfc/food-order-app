import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Meal = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type CartState = {
  meals: Meal[];
  totalAmount: number;
};

const initialState: CartState = {
  meals: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMeal(state, action: PayloadAction<Meal>) {
      const meal = state.meals.find(({ id }) => id === action.payload.id);
      if (meal) {
        meal.amount += action.payload.amount;
      } else {
        state.meals.push(action.payload);
      }

      state.totalAmount = state.meals.reduce((amount, meal) => amount + meal.amount, 0);
    },

    increaseMeal(state, action: PayloadAction<string>) {
      const meal = state.meals.find((meal) => meal.id === action.payload);
      if (meal) {
        meal.amount += 1;
        state.totalAmount = state.meals.reduce((amount, meal) => amount + meal.amount, 0);
      }
    },

    decreaseMeal(state, action: PayloadAction<string>) {
      const meal = state.meals.find((meal) => meal.id === action.payload);
      if (!meal) return;

      meal.amount -= 1;
      if (meal.amount === 0)
        state.meals.splice(
          state.meals.findIndex(({ id }) => id === action.payload),
          1,
        );

      state.totalAmount = state.meals.reduce((amount, meal) => amount + meal.amount, 0);
    },
  },
});

export const { addMeal, increaseMeal, decreaseMeal } = cartSlice.actions;
export default cartSlice.reducer;
