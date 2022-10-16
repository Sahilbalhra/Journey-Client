import { combineReducers } from "redux";
import {postsReducer} from "./postsReducer"
import { authReducer } from "./authReducer";

const reducers = combineReducers({
    postsReducer,
    authReducer,
})
export default reducers