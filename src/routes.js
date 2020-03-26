import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

import Modelos from "./pages/userpanel/perguntas/modelos";
import Nova from "./pages/userpanel/perguntas/nova";

import { isAutenticado } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutenticado() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const VisitorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutenticado() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <PrivateRoute path="/painel/modelos-pergunta" component={Modelos} />
      <PrivateRoute path="/painel/nova-pergunta" component={Nova} />

      <VisitorRoute path="/login" component={Login} />
      <VisitorRoute path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
