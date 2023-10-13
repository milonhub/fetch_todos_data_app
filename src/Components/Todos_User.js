import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import getAllTodos from '../Services/action/todosAction'

const Users = () => {

    const todosdata = useSelector((state) => state)

    const {todos, error, isLoading} = todosdata;
     const dispatch = useDispatch()

         useEffect(()=>{
            dispatch(getAllTodos()) 
        }, [])

       
  return (
    <div> 
      {isLoading && <h3> Data is loading ....</h3>}
      {error && <h3>{error}</h3>}
      {todos.map((data)=> {
        return <section key={data.id}>
          <p>{data.title}</p>
          <p>{data.id}</p>
        </section>
      })} 
    </div>
  )
}

export default Users;