export const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.paylaod
        case 'CREATE':
            return [...posts, action.paylaod]
        case 'UPDATE' ||'LIKE_POST':
        return posts.map((post) => post._id === action.paylaod._id ? action.paylaod : post)
        // case 'LIKE_POST':
        //     return posts.map((post) => post._id === action.paylaod._id ? action.paylaod : post)
        case 'DELETE':
            return posts.filter((post) => post._id !== action.paylaod)

        default:
            return posts
    }
}