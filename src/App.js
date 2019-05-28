import React from 'react';
import "./App.css"
import {Landing,Leasure} from "./screens"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/leasure" component={Leasure} />
          </div>
        </Router>
    </div>
  );
}

export default App;
