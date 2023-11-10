import {createSlice} from '@reduxjs/toolkit'


export interface AuthType {
    user : any;
    token : string;
    isAuthenticated: boolean;
} 

const initialState : AuthType = {
    user: null,
    token: '',
    isAuthenticated: false
}

const AuthSlice = createSlice({
    name : 'Auth',
    initialState,
    reducers : {
        loginSlice: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        logoutSlice: (state) => {
            state.user = null
            state.token = ''
            state.isAuthenticated = false
        }
    }
})

export const {loginSlice,logoutSlice} = AuthSlice.actions;
export default AuthSlice.reducer;

