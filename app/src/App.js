import React from 'react';
import Footer from './Footer'
import AddTask from '../containers/AddTodo'
import VisibleTaskList from '../containers/VisibleTodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <VisibleTaskList/>
      <Footer/>
    </div>
  );
}

export default App;
