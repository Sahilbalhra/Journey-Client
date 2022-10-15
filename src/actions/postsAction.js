import * as api from "../api/index"

//Action Creater
//thunk is used for async actions
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', paylaod: data }
        dispatch(action)

    } catch (error) {
        console.log(error.message);
    }

}
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', paylaod: data })

    } catch (error) {
        console.log(error.message);
    }

}
