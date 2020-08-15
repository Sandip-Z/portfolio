import React from 'react';
import LandingPage from './page/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-lg-6">
          <LandingPage />
        </div>
        <div className="col-lg-6">
          <Switch>
            <Route path="/" exact render={()=><p>I am work</p>} />
            <Route path="/work" render={()=><p>I am work</p>} />
            <Route path="/resume" render={()=><p>I am resume</p>} />
            <Route path="/contact" render={()=><p>I am contact</p>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
