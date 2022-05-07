import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "value",
  initialState: {
    currency: { currency: "USD", symbol: "$" },
  },
  reducers: {
    CurrencyAndSymbol: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { CurrencyAndSymbol } = currencySlice.actions;
export const selectCurrency = (state) => state.currency.currency;
export default currencySlice.reducer;
