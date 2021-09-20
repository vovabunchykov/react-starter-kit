import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Wrapper, Header, Navigation, Language } from "./components";
import { MAIN, PROFILE } from "./constants/routers";
import MainPage from "./pages/Main";
import ProfilePage from "./pages/Profile";

const Routing = () => {
  return (
    <Router>
      <Wrapper>
        <Header>
          <Navigation />
          <Language />
        </Header>
        <Switch>
          <Route exact path={MAIN}>
            <MainPage />
          </Route>
          <Route path={PROFILE}>
            <ProfilePage />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default Routing;
