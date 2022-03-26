import * as postsTypes from "../types/posts"
import { fetchAllPosts } from '../../service/http/posts'
function getAllPosts(dispatch, getState) {
    dispatch({ type: postsTypes.POSTS_LOADING_START })
    fetchAllPosts()
        .then(res => {
            dispatch({
                type: postsTypes.POSTS_LOADING_SUCCESS, payload: res
            })
        })
        .catch(err => {
            dispatch({ type: postsTypes.POSTS_LOADING_FAIL, payload: err?.message })
        })

}

export { getAllPosts }