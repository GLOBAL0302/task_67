import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string[];

}

const initialState: CalculatorState = {
  value: [],
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
      makeResult: (state) => {
        state.value = [eval(state.value.join(""))];
      },
      addSymbol:(state, action:PayloadAction<string>)=>{
        if(action.payload === "C"){
          state.value = [];
        }else {
          state.value.push(action.payload);
        }
      }
    },
  },
);


export const calculatorReducer = calculatorSlice.reducer;
export const { makeResult, addSymbol } = calculatorSlice.actions;
