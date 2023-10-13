import {applyMiddleware, createStore} from 'redux'
import TodosReducer from './Services/todosReducer'
import thunk from 'redux-thunk'
const store = createStore(TodosReducer, applyMiddleware(thunk))

export default store;