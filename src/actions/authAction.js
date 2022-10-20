import { AUTH} from "../constants/authtypes";
import * as api from "../api/index"

export const googleAuth = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH, paylaod: data })
    } catch (error) {
        console.log(error);
    }
}
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const {data}=await api.signIn(formData)
        dispatch({ type: AUTH, data: data })
        navigate("/")
    } catch (error) {
        console.log(error);
    }
}
export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const {data}=await api.signUp(formData)
        dispatch({ type: AUTH, data: data })
        navigate("/")
    } catch (error) {
        console.log(error);
    }
}