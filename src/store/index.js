import { configureStore } from '@reduxjs/toolkit'
import  BanksReducer  from './slices/banksSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, BanksReducer);

export const store = configureStore({
  reducer: {
    banks: persistedReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store);