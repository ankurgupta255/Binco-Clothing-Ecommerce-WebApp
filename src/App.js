import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header.js';
import SigninAndSignup from './pages/signin and signup/signin and signup.js';
import {auth} from './firebase/firebase.utils';


// const HatsPage=()=>{
//   return(
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth=null

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
