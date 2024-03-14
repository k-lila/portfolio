import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SelectedState = {
  section: string
  old?: string
}

const initialState: SelectedState = {
  section: 'about'
}

const selectedSlice = createSlice({
  name: 'selectedPage',
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<string>) => {
      if (state.section !== action.payload) {
        state.old = state.section
      }
      state.section = action.payload
    }
  }
})

export const { selectPage } = selectedSlice.actions
export default selectedSlice.reducer
