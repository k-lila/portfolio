import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './reducers/changepage'
import deviceReducer from './reducers/selectdevice'
export const store = configureStore({
  reducer: {
    select: selectReducer,
    device: deviceReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
