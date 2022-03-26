import * as types from '../types/posts'

const initialPosts = {
    loading: false,
    error: null,
    posts: []
}

export default function postsReducer(state = initialPosts, action) {
    switch (action.type) {
        case types.POSTS_LOADING_FAIL: return { ...state, loading: false, error: action.payload }
        case types.POSTS_LOADING_SUCCESS: return { ...state, loading: false, posts: action.payload }
        case types.POSTS_LOADING_START: return { ...state, loading: true }
        default: return state
    }
}