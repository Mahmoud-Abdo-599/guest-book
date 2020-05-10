import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';

import HomePage from './pages/home-page/home-page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';

function App() {
  return (
    <div>
       <Header />
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
