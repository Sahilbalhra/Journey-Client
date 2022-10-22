import { FETCH_ALL, UPDATE, LIKE, DELETE, CREATE, FETCH_BY_SEARCH } from "../constants/actiontypes"
export const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.paylaod
        case FETCH_BY_SEARCH:
            return action.paylaod
        case CREATE:
            return [...posts, action.paylaod]
        case UPDATE || LIKE:
            return posts.map((post) => post._id === action.paylaod._id ? action.paylaod : post)
        // case LIKE:
        //     return posts.map((post) => post._id === action.paylaod._id ? action.paylaod : post)
        case DELETE:
            return posts.filter((post) => post._id !== action.paylaod)

        default:
            return posts
    }
}