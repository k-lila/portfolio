import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './reducers/menu'

const store = configureStore({
  reducer: {
    menu: menuReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
