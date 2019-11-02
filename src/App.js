import React from 'react';
import Home from './Components/HOME/home'
import About from './Components/ABOUT/about'
import Cart from './Components/CART/cart'
import Login from './Components/LOGIN/login'
import SignUp from './Components/SIGN-UP/signUp'
import { Switch, Route } from "react-router-dom";
import Navbar from './Components/NAVBAR/navbar'




class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />          
          <Route path="/signup" component={SignUp} />
        </Switch>
        
      </div>
    );
  }
}

export default App;

