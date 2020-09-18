import React from "react";
import { Switch, Route } from "react-router-dom";
import Work from "../page/Work";
import Resume from "../page/Resume";
import Contact from "../page/Contact";
import Detail from "../components/Detail";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Work} />
      <Route path="/project" exact component={Work} />
      {/* <Route path="/project/detail/:id" component={Detail} /> */}
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};
export default Routes;
