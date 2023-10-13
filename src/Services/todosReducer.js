
import { GET_SUCCESS_TODOS, GET_TODOS_ERROR, GET_TODOS_REQUESTS } from './Constants/todosConstants';
const initialTodos = {
    isLoading: false,
    todos: [],
    error: null
}
const TodosReducer = (state = initialTodos, action) => {
 
    switch (action.type) {
        case GET_TODOS_REQUESTS:
            
            return {
                ...state,
                isLoading: true,
            }
        case GET_SUCCESS_TODOS:
            
            return {
                ...state,
                todos: action.payload,
                isLoading: false,
            }

        case GET_TODOS_ERROR:
            
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
             
    
        default:
            return state;
    }
}

export default TodosReducer