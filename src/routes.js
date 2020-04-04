import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home";

import Perfil from "./pages/perfil";
import Usuarios from "./pages/usuarios";

import Perguntas from "./pages/user/perguntas";
import Respostas from "./pages/user/respostas";

import Modelos from "./pages/user/modelos";
import Nova from "./pages/user/nova";
import Editar from "./pages/user/editar";

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
        <Redirect
          to={{ pathname: "/meus-modelos", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <VisitorRoute exact path="/" component={Home} />

      <PrivateRoute exact path="/perfil/:id" component={Perfil} />
      <PrivateRoute exact path="/usuarios" component={Usuarios} />

      <PrivateRoute exact path="/perguntas" component={Perguntas} />
      <PrivateRoute exact path="/respostas" component={Respostas} />

      <PrivateRoute exact path="/meus-modelos" component={Modelos} />
      <PrivateRoute exact path="/novo-modelo" component={Nova} />
      <PrivateRoute exact path="/editar-modelo/:id" component={Editar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
