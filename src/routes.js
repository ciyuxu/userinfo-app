import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    );
  }
}
