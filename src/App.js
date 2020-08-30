import React from "react";
import LandingPage from "./page/LandingPage";
import Work from "./page/Work";
import Resume from "./page/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <Router basename="portfolio">
        <div className="row">
          <div className="col-lg-6 w-100vh">
            <LandingPage />
          </div>
          <div className="col-lg-6">
            <Switch>
              <Route path="/" exact component={Work} />
              <Route path="/work" component={Work} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" render={() => <p>I am contact</p>} />
            </Switch>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
