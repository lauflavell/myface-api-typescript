import "./App.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { PostList } from "./components/PostList";
import { UsersPage } from "./components/UsersPage";
import { UserDetail } from "./components/UserDetail";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts" component={PostList} />
        <Route exact path="/users" component={UsersPage} />
        <Route path="/users/58" component={UserDetail} />
        
      </Switch>
    </main>
  );
}

export default App;
