import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

import Perguntas from "./pages/user/perguntas";
import Respostas from "./pages/user/respostas";

import Modelos from "./pages/user/modelos";
import Nova from "./pages/user/nova";

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

      <PrivateRoute path="/perguntas" component={Perguntas} />
      <PrivateRoute path="/respostas" component={Respostas} />

      <PrivateRoute path="/meus-modelos" component={Modelos} />
      <PrivateRoute path="/novo-modelo" component={Nova} />

      <VisitorRoute path="/login" component={Login} />
      <VisitorRoute path="/cadastro" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
