import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Uzduotis6 from '../Uzduotis6/Uzduotis6';
import Uzduotis7 from '../Uzduotis7/Uzduotis7';
import Uzduotis4 from '../Uzduotis4/Uzduotis4';

const Uzduotis9 = () => {
  return (
    <div>
    <Router>
        <h4><Link to="/Uzduotis7">Uzduotis7</Link></h4>
        <h4><Link to="/Uzduotis4">Uzduotis4</Link></h4>
        <h4><Link to="/Uzduotis6">Uzduotis6</Link></h4>
        <Routes>
          <Route path="/Uzduotis4" element={<Uzduotis4/>}>
          </Route>
          <Route path="/Uzduotis7"  element={<Uzduotis7/>}>
          </Route>
          <Route path="/Uzduotis6"  element={<Uzduotis6/>}>
          </Route>
        </Routes>
    </Router>
    </div>
  )
}

export default Uzduotis9