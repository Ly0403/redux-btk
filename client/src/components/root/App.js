import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import Notfound from "../common/Notfound";
import { Routes, Route } from "react-router-dom";
import CartSummary from "../cart/CartSummary";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

class App extends Component {
  render() {
    return (
      <div>
        <Navi></Navi>
        <Routes>
          <Route path="/saveProduct/:productId" Component={AddOrUpdateProduct}></Route>
          <Route path="/saveProduct" Component={AddOrUpdateProduct}></Route>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/cart" element={<CartSummary/>}></Route>
          <Route exact path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
