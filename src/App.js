import React from "react";
import "./App.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/footer";
import Policies from "./Components/policies";

//Categories Sublist Components
import Nike from "./Components/Brands/nike";
import Adidas from './Components/Brands/adidas';
import T61 from "./Components/Brands/t61";
import Vans from "./Components/Brands/vans";
import Converse from "./Components/Brands/converse";

//Brands Sublist Components
import Sneakers from './Components/Categories/sneakers';
import Casuals from './Components/Categories/casuals';
import Boots from './Components/Categories/boots';
import Sports from './Components/Categories/sports';
import Running from './Components/Categories/running';

import Tos from "./Components/tos";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />

          {/* Brands */}
          <Route path="/nike" component={Nike} />
          <Route path="/adidas" component={Adidas} />
          <Route path="/361" component={T61} />
          <Route path="/vans" component={Vans} />
          <Route path="/converse" component={Converse} />

          {/* Categories */}
          <Route path="/sneakers" component={Sneakers} />
          <Route path="/casuals" component={Casuals} />
          <Route path="/boots" component={Boots} />
          <Route path="/sports" component={Sports} />
          <Route path="/running" component={Running} />

          <Route path="/policies" component={Policies} />
          <Route path="/tos" component={Tos} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
