import React from 'react';
import "./App.css"
import {Contacts, Help, Landing, Leisure, Maps, About} from "./screens"
import {Corniche, Katara, Museum, QatarAirways, SoukWaqef, WorldCup} from "./screens/AboutPages"
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
            <Route exact path="/qatarAirways" component={QatarAirways} />
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/corniche" component={Corniche} />
            <Route exact path="/katara" component={Katara} />
            <Route exact path="/museum" component={Museum} />
            <Route exact path="/soukwaqef" component={SoukWaqef} />
            <Route exact path="/worldcup" component={WorldCup} />
          </div>
        </Router>
    </div>
  );
}

export default App;
