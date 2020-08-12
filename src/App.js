import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
        Hats Page
    </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
