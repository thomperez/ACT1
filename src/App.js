import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';




function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <ToastContainer position='top-center'/>
      <Switch> 
        <Route  path="/" exact component={Home} />
        <Route path="/add" component={AddEdit} />
        <Route path="/update/:id" component={AddEdit} />
        <Route path="/view/:id" component={View} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
