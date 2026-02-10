import './App.css';
import Navbar from './my-components/navbar';
import {Todos} from './my-components/todos';
import {Footer} from './my-components/footer';
import {AddTodo} from './my-components/addtodo';
import { useState, useEffect } from 'react';

function App() {
  let initTodos;
  if(localStorage.getItem("todos") === null){
    initTodos = [];
  }else{
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("Deleted", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("Adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  return (
    <>
      <Navbar title="My Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
