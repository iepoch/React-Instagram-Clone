import React, { Component } from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage"
import Authenticate from "./components/Authenticate/Authenticate"


const App = (
  class App extends Component {
    constructor() {
      super()
      this.state = {}
     }

    render() {


      return (
        <div className='App'>

          <PostPage />

        </div>
      );
    }
  }
);

export default Authenticate(App);
