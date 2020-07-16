import React from 'react';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Men from './Component/Men';
import Accessories from './Component/Accessories';
import Women from './Component/Women';
import Shoes from './Component/Shoes';
import Order from './Component/Order';
import Hat from './Component/Hat';
import Slipers from "./Component/Slippers";

function App() {
  return (
    <Router>
    <div className="App">
     <Header />
     <Switch>
     <Route path="/" exact component={Home} Home />
     <Route path="/Men" component={Men} Men />
     <Route path="/Women" component={Women} Women />
     <Route path="/Shoes" component={Shoes} Women />
     <Route path="/Accessories" component={Accessories} Accessories />
      <Route path="/Order" component={Order} Accessories />
      <Route path="/Hat" component={Hat} Accessories />
      <Route path="/Slipers" component={Slipers} Accessories />


     </Switch>
     <Footer /> 

    </div>
    </Router>
  );
}

export default App;
