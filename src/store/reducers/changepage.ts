import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SelectedState = {
  section: string
}

const initialState: SelectedState = {
  section: 'about'
}

const selectedSlice = createSlice({
  name: 'selectedPage',
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<string>) => {
      state.section = action.payload
    }
  }
})

export const { selectPage } = selectedSlice.actions
export default selectedSlice.reducer
