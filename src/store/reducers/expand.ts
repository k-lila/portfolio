import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SelectedState = {
  expand: string
}

const initialState: SelectedState = {
  expand: 'none'
}

const expandSlice = createSlice({
  name: 'expand',
  initialState,
  reducers: {
    selectExpand: (state, action: PayloadAction<string>) => {
      state.expand = action.payload
    }
  }
})

export const { selectExpand } = expandSlice.actions
export default expandSlice.reducer
