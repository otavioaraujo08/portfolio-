import { createSlice } from '@reduxjs/toolkit';

export const languageStore = createSlice({
  name: 'languageSwitcher',
  initialState: false,
  reducers: {
    changeStatus: (state) => {
      return !state;
    },
  },
});

export const { changeStatus } = languageStore.actions;
export default languageStore.reducer;
