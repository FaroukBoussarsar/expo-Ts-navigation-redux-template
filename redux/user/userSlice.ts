import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type InitialState = {
    loading: boolean
    user: {name: string} | null
    error: string | null
}


const initialState: InitialState = {
    loading: false,
    user: null,
    error: null
}

const userSlice = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
      getUserStart(state) {
          state.loading = true
      },
      getUserSuccess(state, action: PayloadAction<{name: string}>) {
          state.loading = false
          state.user = action.payload
      },
      getUserFailure(state, action: PayloadAction<string>) {
          state.loading = false
          state.error = action.payload
      }
    }
  })

export const {getUserFailure, getUserStart, getUserSuccess} = userSlice.actions 

export default userSlice.reducer  