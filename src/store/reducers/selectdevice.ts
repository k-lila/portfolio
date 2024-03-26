import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { discoverDevice } from '../../utils'

type SelectedState = {
  device: string
}

const initialState: SelectedState = {
  device: discoverDevice()
}

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    selectDevice: (state, action: PayloadAction<string>) => {
      state.device = action.payload
    }
  }
})

export const { selectDevice } = deviceSlice.actions
export default deviceSlice.reducer
