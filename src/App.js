import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import AddItemForm from './components/AddItemForm/AddItemForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <AddItemForm />


      </div>
    );
  }
}

export default App;
