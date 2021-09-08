import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PostList } from "./components/PostList";
import { UsersPage } from "./components/UsersPage";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={PostList} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </main>
  );
}

export default App;
