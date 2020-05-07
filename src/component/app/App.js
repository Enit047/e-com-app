import React from 'react'
import HomePage from "../../pages/homepage/homepage"
import './App.sass'
import {Link, Route} from 'react-router-dom'
import ShopPage from "../../pages/shopPage/shopPage";

function App() {
  return (
      <>
            <Route path='/' exact component={HomePage}/>
            <Route path='/shop' exact component={ShopPage}/>
      </>
  );
}

export default App;
