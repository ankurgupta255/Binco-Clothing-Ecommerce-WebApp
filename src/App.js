import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header.js';
import SigninAndSignup from './pages/signin and signup/signin and signup.js';
import CheckoutPage from './pages/checkout/checkout';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';


// const HatsPage=()=>{
//   return(
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// }

class App extends React.Component {
  /*constructor(){
      super()
      this.state={
        currentUser: null
      }
    }*/

  unsubscribeFromAuth=null

  componentDidMount(){
    const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser ({
            id: snapShot.id,
            ...snapShot.data()
          })
          })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />) :  (<SigninAndSignup />)} />
          <Route path='/checkout'component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps= dispatch => ({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
