import * as api from "../api/index"
import { FETCH_ALL, FETCH_BY_SEARCH, DELETE, UPDATE, LIKE, CREATE } from "../constants/actiontypes";

//Action Creater
//thunk is used for async actions
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = { type: FETCH_ALL, paylaod: data }
        dispatch(action)

    } catch (error) {
        console.log(error.message);
    }

}
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        const action = { type: FETCH_BY_SEARCH, paylaod: data }
        dispatch(action)
    } catch (error) {
        console.log(error)

    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, paylaod: data })

    } catch (error) {
        console.log(error);
    }

}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, paylaod: data })

    } catch (error) {
        console.log(error);
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, paylaod: id })
    } catch (error) {
        console.log(error);
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, paylaod: data })
    } catch (error) {
        console.log(error);
    }
}

