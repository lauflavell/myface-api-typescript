import './App.css';
import React from "react";
import { PostList } from './components/PostList';
import { UserDetail } from './components/UserDetail';

function App() {
  return(
    <main>
      <PostList/>
      <UserDetail/>
    </main> 
  ) 
}

export default App;
