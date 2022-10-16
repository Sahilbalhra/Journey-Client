import { GAUTH } from "../constants/actiontypes";

export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case GAUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        default:
            return state
    }
}