import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';
import { useState, useEffect } from 'react';
import Todo from './view/Todo';
import Countries from './view/Countries';
import { CountDown, NewCountDown } from './view/Countdown';
import Blog from './view/Blog';
import DetailBlog from './view/DetailBlog';
import AddNewBlog from './view/AddNewBlog';
import NotFound from './view/NotFound';
import YoutubeSearch from './view/YoutubeSearch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import { Switch } from "react-router-dom";

// template + logic
// JSX
// babel
const App = () => {

  let [name, setName] = useState('Drkhaik123');
  const [address, setAddress] = useState('1234 Main St');
  const [todo, setTodo] = useState([
    { id: 'todo1', title: 'Watching Youtube', scheduler: 'drkhaik' },
    { id: 'todo2', title: 'Studying Code', scheduler: 'drkhaik' },
    { id: 'todo3', title: 'Using Facebook', scheduler: 'hoidanit' },
    { id: 'todo4', title: 'Using Bicycle', scheduler: 'hoidanit' },
  ]);

  // componentDidUpdate
  // useEffect(() => {
  //   console.log("U had changed the address")
  // }, [address]);

  const handleOnClick = (event) => {
    if (!address) {
      alert("Empty input");
      return
    }
    // ... spread syntax array js
    let newTodo = { id: Math.floor((Math.random() * 1000) + 1), title: address, scheduler: 'drkhaik' }
    setTodo([...todo, newTodo]);
    setAddress('')
  }

  const handleOnChange = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodo = todo;
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodo(currentTodo)
  }

  const onTimesUp = () => {
    // alert(`Time's up`)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact>
            <h1>Hello world with React and {name}! </h1>
            <Countries />
          </Route>

          <Route path="/count-down">
            <CountDown onTimesUp={onTimesUp} />
            <span>======================</span>
            <NewCountDown onTimesUp={onTimesUp} />
          </Route>

          <Route path="/todo">
            <Todo
              todo={todo}
              title={'All todo'}
              deleteDataTodo={deleteDataTodo}
            />
            <Todo
              todo={todo.filter(item => item.scheduler === 'drkhaik')}
              title={`Todo's Drkhaik`}
              deleteDataTodo={deleteDataTodo}
            />
            <input type='text' value={address} onChange={(event) => { handleOnChange(event) }} />
            <button onClick={() => { handleOnClick() }}>Click</button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog/">
            <AddNewBlog />
          </Route>
          <Route path="/secret">
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
