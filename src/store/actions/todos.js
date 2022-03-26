import { fetchAllTodos } from '../../service/http/todos'
import * as todosTypes from '../types/todos'
function getAllTodos(dispatch, getState) {
    dispatch({ type: todosTypes.TODOS_LOADING_START })
    fetchAllTodos()
        .then(res => {
            dispatch({
                type: todosTypes.TODOS_LOADING_SUCCESS, payload: res
            })
        })
        .catch(err => {
            dispatch({ type: todosTypes.TODOS_LOADING_FAIL, payload: err?.message })
        })

}
function deleteTodos(id) {
    return async function (dispatch, getState) {
        const state = getState()
        console.log(state, 'statee') ;
        const newState = state.todos.todos.filter(item => item.id !== id)

        dispatch({
            type: todosTypes.TODOS_DELETE, payload: newState
        })
    }

}

export { getAllTodos, deleteTodos }