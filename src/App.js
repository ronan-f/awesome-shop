import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import SignInUp from './Pages/SignInUp/SignInUp.component';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
