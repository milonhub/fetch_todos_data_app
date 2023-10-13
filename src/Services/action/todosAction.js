import axios from 'axios';
import { GET_SUCCESS_TODOS, GET_TODOS_ERROR, GET_TODOS_REQUESTS } from '../Constants/todosConstants';

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";


const getAllTodos = () => { return async(dispatch) =>{
    

        dispatch({type: GET_TODOS_REQUESTS})
        try {
            const res = await axios.get(TODOS_URL);
            dispatch({ type: GET_SUCCESS_TODOS, payload: res.data})
            
        } catch (error) {
            dispatch({ type: GET_TODOS_ERROR, payload: error.message})
        }

}}

export default getAllTodos;