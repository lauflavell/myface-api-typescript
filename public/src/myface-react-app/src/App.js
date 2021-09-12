import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PostList } from "./components/PostList";
import { UsersPage } from "./components/UsersPage";
import { UserDetail } from "./components/UserDetail";
import { CreatePostPage } from "./components/CreatePostPage";
import { CreateUserPage } from "./components/CreateUserPage";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/users" component={UsersPage} />
          <Route path="/users/create" component={CreateUserPage} />
          <Route path="/users/:userId" component={UserDetail} />
          <Route path="/posts/create" component={CreatePostPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
