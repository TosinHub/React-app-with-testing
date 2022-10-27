import logo from './logo.svg';
import './App.css';
import Todo from './components/todo'

function App() {

  const todos = [
    {id: 1, title:"Dishes", completed: false},
    {id: 2, title:"Football", completed: true}
  ]


  return (
    <div className="App">
{
  todos.map( (todo) => {
   return <Todo todo={todo}/>
})
}
    </div>
  );
}

export default App;
