// App.js

import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Router>
         
         <Routes>
         <Route path="/Shop" element={<Shop/>}></Route>      
         <Route path="/Review" element={<Review></Review>}></Route>
         <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>
         <Route exact path="/" element={<Shop/>}></Route>   
         </Routes>
         



      </Router>
    </div>
  );
}

export default App;
