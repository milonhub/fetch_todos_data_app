import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import getAllTodos from '../Services/action/todosAction';
import style from './todos.module.css';

const Users = () => {

    const todosdata = useSelector((state) => state)

    const {todos, error, isLoading} = todosdata;
     const dispatch = useDispatch()

         useEffect(()=>{
            dispatch(getAllTodos()) 
        }, [])

       
  return (
    <div> 
          <h1>Using React-Redux</h1>
          <h1>User Data Management App</h1>

      {isLoading && <h3> Data is loading ....</h3>}
      {error && <h3>{error}</h3>}
      <section className={style.section}>
      {todos.map((data)=> {
        return <article key={data.id} className={style.article}>
          <p>{data.id}</p>
          <p>{data.title}</p> 
        </article>
      })} 
      </section>
     
      
    </div>
  )
}

export default Users;