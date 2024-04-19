import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './reducers/changepage'
import deviceReducer from './reducers/selectdevice'
import expandReducer from './reducers/expand'

export const store = configureStore({
  reducer: {
    select: selectReducer,
    device: deviceReducer,
    expand: expandReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
