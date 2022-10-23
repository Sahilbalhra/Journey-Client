import { FETCH_ALL, FETCH_POST, UPDATE, LIKE, DELETE, CREATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT } from "../constants/actiontypes"
export const postsReducer = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_ALL:
            return {
                ...state,
                posts: action.paylaod.data,
                currentPage: action.paylaod.currentPage,
                numberOfPages: action.paylaod.numberOfPages
            }
        case FETCH_POST:
            console.log("post reducer:", action.paylaod)
            return { ...state, post: action.paylaod }
        case FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.paylaod,
            }
        case CREATE:
            return { ...state, posts: [...state.posts, action.paylaod] }
        case UPDATE || LIKE:
            return { ...state, posts: state.posts.map((post) => post._id === action.paylaod._id ? action.paylaod : post) }
        case COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id === action.paylaod._id) {
                        return action.paylaod
                    }
                    return post
                })
            }
        // case LIKE:
        //     return posts.map((post) => post._id === action.paylaod._id ? action.paylaod : post)
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.paylaod) }

        default:
            return state
    }
}