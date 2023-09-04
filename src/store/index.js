import { configureStore } from '@reduxjs/toolkit';
import languageStore from './LanguageStore';

const store = configureStore({
  reducer: {
    language: languageStore,
  },
});

export default store;
