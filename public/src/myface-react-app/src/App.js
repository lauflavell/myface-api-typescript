import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { PostList } from "./components/PostList";
import { UsersPage } from "./components/UsersPage";
import { UserDetail } from "./components/UserDetail";
import NewUserForm from "./components/NewUserForm";

function App() {
  return (
    <Router>
    <main>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts" component={PostList} />
        <Route exact path="/users" component={UsersPage} />
        <Route path="/users/:userId" component={UserDetail} />
        <Route exact path="/users/newuser" components={NewUserForm}/>
      </Switch>
    </main>
    </Router>
  );
}

export default App;
