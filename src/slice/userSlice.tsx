import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const RoleId = process.env.ROLE_ID

export interface UserState {
    id: number | null;
    firstName: string;
    lastName: string; // corrected typo from lastNaem to lastName
    address: string;
    email: string;
    phone: string;
    roleId: number;
    createdAt: string;
    updatedAt: string;
}

const initialState: UserState = {
    id: null,
    firstName: '',
    lastName: '', // corrected typo from lastNaem to lastName
    address: '',
    email: '',
    phone: '',
    roleId: Number(RoleId),
    createdAt: '',
    updatedAt: '',
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

        },
        decrement: (state) => {

        },
        incrementByAmount: (state, action: PayloadAction<number>) => {

        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer