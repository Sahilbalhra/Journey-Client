import { GAUTH } from "../constants/actiontypes";

export const googleAuth = (data) => async (dispatch) => {
    try {
        dispatch({ type: GAUTH, paylaod: data })
    } catch (error) {
        console.log(error);
    }
}