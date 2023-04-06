import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      // console.log(action.payload); /undefined since no "payload" argument is passed in dispatch in App.js
      // console.log(action.type); //counter/increment
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
      //   state.push(action.payload) - INCORRECT bcoz it's not an Array
    },
    decrementBy: (state, action) => {
      state.counter -= action.payload;
      //   state.push(action.payload) - INCORRECT bcoz it's not an Array
    },

    multiplyBy: (state, action) => {
      state.counter = state.counter * state.counter;
      //   console.log(action.payload); //undefined since no "payload" argument is passed in multiply() function in dispatch in App.js
    },
  },
});
// console.log(counterSlice);
export const { increment, decrement, incrementBy, decrementBy, multiplyBy } =
  counterSlice.actions;
export default counterSlice.reducer;
