import todosReducer from "./reducers/todos";
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import postsReducer from "./reducers/posts";

const rootReducer = combineReducers({
    todos: todosReducer,
    posts: postsReducer
})

const composedDevTools = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedDevTools)

export default store