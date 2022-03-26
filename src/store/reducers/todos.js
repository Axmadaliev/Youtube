import * as types from '../types/todos'

const initialTodos = {
    loading: true,
    error: null,
    todos: []
}

export default function todosReducer(state = initialTodos, action) {
    switch (action.type) {
        case types.TODOS_LOADING_FAIL: return { ...state, loading: false, error: action.payload }
        case types.TODOS_LOADING_SUCCESS: return { ...state, loading: false, todos: action.payload }
        case types.TODOS_LOADING_START: return { ...state, loading: true }
        case types.TODOS_DELETE: return { ...state, todos: action.payload }
        default: return state
    }
}