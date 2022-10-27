import {render, screen,cleanup}  from '@testing-library/react'

import Todo from '../todo'

afterEach(() =>{
    cleanup();
})

test('render To Do component',  () =>{
    const todo = {id: 1, title:"Dishes", completed: false}
       
    render (<Todo todo={todo}/>);

    const todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Dishes')



})