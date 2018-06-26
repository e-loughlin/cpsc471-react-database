import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import NavigationStore from './components/Navigation/NavigationStore';
import NavigationOrder from './components/Navigation/NavigationOrder';
import NavigationRequisition from './components/Navigation/NavigationRequisition';
import NavigationEvents from './components/Navigation/NavigationEvents';
import Logo from './components/Logo/Logo';
import AddItemForm from './components/AddItemForm/AddItemForm';
import Signin from './components/Signin/Signin';
import StoreItems from './components/StoreItems/StoreItems';
import Register from './components/Register/Register';
import './App.css';
import blackbelts from './blackbelts.png';
import PageNotFound from './components/PageNotFound/PageNotFound';
import OrdersViewAll from './components/Orders/OrdersViewAll';
import OrdersSubmitNew from './components/Orders/OrdersSubmitNew';
import RequisitionNew from './components/Requisitions/RequisitionNew';
import RequisitionHistory from './components/Requisitions/RequisitionHistory';
import EventNew from './components/Events/EventNew';
import EventRegister from './components/Events/EventRegister';

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'potato',
    database : 'ProjectACKU'
  }
});


class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			route: 'signin',
      imageURL: '',
      box: {},
      isSignedIn: true
		}
	}
	onInputChange = (event) => {
		console.log(event.target.value);
	}

	onButtonSubmit = () => {
		console.log('click');
	}

	onRouteChange = (route) => {

  if(this.state.isSignedIn)
		this.setState({route: route});
  else if(route === 'signin')
    this.setState({route: 'signin'});
  else if(route === 'register')
    this.setState({route: 'register'});
  else
    this.setState({route: 'signin'});
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
  			<div><Navigation onRouteChange={this.onRouteChange}/><Logo />
            

            <article className="br3 ba dark-gray b--black-10 mv6 shadow-5 w-800 w-800-m w-800-l mw7 center">
			<main className="pa4 black-800">
			<p><strong>Welcome to the All Canadian Karate Union - Requisition Submission Form! :) </strong></p>
            <img src={blackbelts} width="80%" />
			</main>
			</article>


  		    </div>
  			</div>
  			);
  	
    else if(this.state.route === 'register') return(
          <div className="App">
        <div><br/><br/><br/><br/><br/><br/><Logo /><Register onRouteChange={this.onRouteChange}/></div>
        </div>
        );

  	else if(this.state.route === 'orders') return(
  		  	<div className="App">
  			<div><Navigation onRouteChange={this.onRouteChange}/><Logo /><NavigationOrder onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);

 	else if(this.state.route === 'requisitions') return(
  		  	<div className="App">
  			<div><Navigation onRouteChange={this.onRouteChange}/><Logo /><NavigationRequisition onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);

  	else if(this.state.route === 'store') return(
  		  	<div className="App">
  			<div><Navigation onRouteChange={this.onRouteChange}/><Logo /><NavigationStore onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);

    else if(this.state.route === 'events') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><NavigationEvents onRouteChange={this.onRouteChange}/></div>
        </div>
        );

  	else if(this.state.route === 'viewAllItems') return(
  		  	<div className="App">
  			<div><Navigation onRouteChange={this.onRouteChange}/><Logo /><StoreItems onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);

  	else if(this.state.route === 'editStore') return(
  		  	<div className="App">
  			<div><Navigation onRouteChange={this.onRouteChange}/><Logo /><AddItemForm onRouteChange={this.onRouteChange}/></div>
  			</div>
  			);

    else if(this.state.route === 'viewAllOrders') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><OrdersViewAll onRouteChange={this.onRouteChange}/></div>
        </div>
        );

    else if(this.state.route === 'newOrder') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><OrdersSubmitNew onRouteChange={this.onRouteChange}/></div>
        </div>
        );

          else if(this.state.route === 'reqHistory') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><RequisitionHistory onRouteChange={this.onRouteChange}/></div>
        </div>
        );

    else if(this.state.route === 'reqNew') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><RequisitionNew onRouteChange={this.onRouteChange}/></div>
        </div>
        );

    else if(this.state.route === 'eventEdit') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><EventNew onRouteChange={this.onRouteChange}/></div>
        </div>
        );

    else if(this.state.route === 'eventRegister') return(
          <div className="App">
        <div><Navigation onRouteChange={this.onRouteChange}/><Logo /><EventRegister onRouteChange={this.onRouteChange}/></div>
        </div>
        );

  	else return(
			<div className="App">
  			<div><br/><br/><br/><br/><br/><Logo /><PageNotFound onRouteChange={this.onRouteChange}/></div>
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
