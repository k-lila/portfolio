import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenuState = {
  selected: 'projects' | 'contact' | ''
}

const initialState: MenuState = {
  selected: ''
}

const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setSelected: (
      state,
      action: PayloadAction<'projects' | 'contact' | ''>
    ) => {
      if (state.selected == action.payload) {
        state.selected = ''
      } else {
        state.selected = action.payload
      }
    }
  }
})

export const { setSelected } = MenuSlice.actions
export default MenuSlice.reducer
