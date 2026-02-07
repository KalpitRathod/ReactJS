import './App.css';
import Navbar from './my-components/navbar';
import {Todos} from './my-components/todos';
import {Footer} from './my-components/footer';

function App() {
  let todos = [
    {
      sno: 1,
      title: "Todo 1",
      desc: "Description 1"
    },
    {
      sno: 2,
      title: "Todo 2",
      desc: "Description 2"
    },
    {
      sno: 3,
      title: "Todo 3",
      desc: "Description 3"
    }
  ]
  return (
    <>
      <Navbar title="My Todos List" searchBar={true}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
