import React from 'react';
import "./App.css"
import {Contacts, Help, Landing, Leisure, Maps, About} from "./screens"
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/leisure" component={Leisure} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/maps" component={Maps} />
          </div>
        </Router>
    </div>
  );
}

export default App;
