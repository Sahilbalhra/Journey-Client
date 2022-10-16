import { GAUTH, LOGOUT } from "../constants/authtypes";

export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case GAUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            // console.log("google auth reducer:", JSON.stringify({ ...action?.payload }) )
            return { ...state, authData: action?.data }
            
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null }
        default:
            return state
    }
}