import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './reducers/changepage'

export const store = configureStore({
  reducer: {
    select: selectReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
