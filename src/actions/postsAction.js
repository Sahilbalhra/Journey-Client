import * as api from "../api/index"
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, DELETE, UPDATE, LIKE, COMMENT, CREATE, START_LOADING, END_LOADING } from "../constants/actiontypes";

//Action Creater
//thunk is used for async actions
export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPosts(page);
        // console.log(data);
        const action = { type: FETCH_ALL, paylaod: data }
        dispatch(action)
        dispatch({ type: END_LOADING })

    } catch (error) {
        console.log(error.message);
    }

}
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPost(id);
        console.log("data in action:", data);
        const action = { type: FETCH_POST, paylaod: data }
        dispatch(action)
        dispatch({ type: END_LOADING })

    } catch (error) {
        console.log(error.message);
    }

}
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        const action = { type: FETCH_BY_SEARCH, paylaod: data }
        dispatch(action)
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)

    }

}

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createPost(post)
        navigate(`/posts/${data._id}`)
        dispatch({ type: CREATE, paylaod: data })
        dispatch({ type: END_LOADING })

    } catch (error) {
        console.log(error);
    }

}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, paylaod: data })
        dispatch({ type: END_LOADING })

    } catch (error) {
        console.log(error);
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        await api.deletePost(id)
        dispatch({ type: DELETE, paylaod: id })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, paylaod: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const commentPost = (id, value) => async (dispatch) => {
    try {
        const { data } = await api.comment(id, value)
        dispatch({ type: COMMENT, paylaod: data })
        return data.comments;
    } catch (error) {
        console.log(error)

    }
}