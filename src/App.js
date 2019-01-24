import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.js";
import UsersList from './components/UsersList.js';
import Login from './components/Login';
import { Route } from 'react-router-dom';

class App extends Component {

  signout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div >
        <header>
          <NavBar signout={this.signout}/>
        </header>
        <main>

        <Route path="/" exact render={props => <h2>Hello from the Home Page</h2>} />

        <Route 
          path="/users" 
          render={props => <UsersList /> } /> 

        <Route 
          path="/login" 
          render={props => <Login /> } /> 

        </main>
      </div>
    );
  }
}

export default App;
