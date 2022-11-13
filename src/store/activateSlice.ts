import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ActivateState{
  name: string,
  avatar: any,
}

const initialState: ActivateState = {
  name: '',
  avatar: '',
};

export const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    setAvatar: (state, action: PayloadAction<any>) => {
      state.avatar = action.payload;
    },
  },
})

export const { setName, setAvatar } = activateSlice.actions

export default activateSlice.reducer