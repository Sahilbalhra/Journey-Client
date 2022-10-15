const posts = []
export const postsReducer = (state = posts, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.paylaod
        case 'CREATE':
            return [...state, action.paylaod]
        default:
            return state
    }
}