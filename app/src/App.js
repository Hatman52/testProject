import React from 'react';
import Footer from './components/Footer'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Example from './components/countTest'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
          <Route exact path="/">
            <h3>Task list</h3>
            <TaskList/>
            <Footer/>
            <Link to="/add">Add task</Link>
            <Example number={1}/>
            <Example number={0}/>
          </Route>
          <Route path="/add">
            <h3>Add a new task</h3>
            <AddTask/>
            <Link to="/">Return</Link>
          </Route>
      </div>
    </Router>
  );
}

export default App;
