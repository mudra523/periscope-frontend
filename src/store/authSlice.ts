import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState{
  isAuth: boolean,
  user: any,
  otp: {
    phone: string,
    hash: string,
  }
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
  otp: {
    phone: '',
    hash: '',
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      const { user } = action.payload;
      state.user = user;
      if (user === null) {
        state.isAuth = false;
      } else {
        state.isAuth = true;
      }
    },
    setOtp: (state, action: PayloadAction<any>) => {
      const { phone, hash } = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    },
  },
})

export const { setAuth, setOtp } = authSlice.actions

export default authSlice.reducer