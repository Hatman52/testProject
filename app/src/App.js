import React from 'react';
import Footer from './components/Footer'
import AddTask from './containers/AddTask'
import VisibleTaskList from './containers/VisibleTaskList'
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
