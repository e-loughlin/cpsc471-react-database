import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import AddItemForm from './components/AddItemForm/AddItemForm';
import Signin from './components/Signin/Signin';
import StoreItems from './components/StoreItems/StoreItems';
import Register from './components/Register/Register';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			route: 'signin'
		}
	}
	onInputChange = (event) => {
		console.log(event.target.value);
	}

	onButtonSubmit = () => {
		console.log('click');
	}

	onRouteChange = (route) => {
		this.setState({route: route});
	}


  render() {

  	if(this.state.route === 'signin')
  	{
  		return(
  			<div className="App">
  			<div><br/><br/><br/><br/><br/><br/><Logo /><Signin onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);
  	}
  	
  	else if(this.state.route === 'home') return(
  		  	<div className="App">
  			<div><Navigation /><Logo /><AddItemForm onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);
  	
}
     /*else return (

        {this.state.route === 'signin'
        ? 
        : ( this.state.route === 'register'
           ? <div><br/><br/><br/><br/><br/><br/><Logo /><Register onRouteChange={this.onRouteChange}/></div>
           : <div> 
            <Navigation onRouteChange={this.onRouteChange}/>
        	<Logo />
	        <AddItemForm 
	        onInputChange={this.onInputChange} 
	        onButtonSubmit={this.onButtonSubmit}/>
       	  </div> )
    	}

    );*/
}

export default App;
