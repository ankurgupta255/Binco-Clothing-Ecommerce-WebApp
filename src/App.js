import React from 'react';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.js';
import {Route, Switch} from 'react-router-dom';
import './App.css';

// const HatsPage=()=>{
//   return(
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
