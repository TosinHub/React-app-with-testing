import React from 'react'

const Todo = ({todo}) =>{

  const {id, title, completed} = todo

   const text = completed ?  <h1>{title}</h1>  : <h1><strike>{title}</strike></h1>


    return (
    <div data-testid = {`todo-${id}`}>
       {text}
    </div>

    )
}

export default Todo;