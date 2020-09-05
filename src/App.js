import React from "react";
import LandingPage from "./page/LandingPage";
import TabletNav from "./components/TabletNav";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Routes from "./router/Routes";
import FootNavigation from "./components/FootNav";
function App() {
  return (
    <ErrorBoundary>
      <Router basename="portfolio">
        <>
          <TabletNav />
          <div className="row">
            <div className="landing-page col-lg-6 w-100vh">
              <LandingPage />
            </div>
            <div className="col-lg-6">
              <Routes />
            </div>
          </div>
          <FootNavigation />
        </>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
