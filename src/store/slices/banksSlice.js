import { createSlice } from '@reduxjs/toolkit';
import useFetch from '../../hooks/useFetch';

export const BanksSlice = createSlice({
  name: 'banks',
  initialState: {
    bankList: null
  },
  reducers: {
    setBanks: (state, action) => {
      state.bankList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBanks } = BanksSlice.actions

export default BanksSlice.reducer