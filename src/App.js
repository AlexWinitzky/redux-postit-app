import React, { Fragment } from 'react';
import PostitList from './components/PostitList'
import PostitForm from './components/PostitForm'
import NavBar from './components/NavBar'
import './App.css';

const App = () => (
  <Fragment>
    <div className="center">
        <img src={'postit_pic.jpeg'} className="App-logo" alt="Post it logo" />
      <NavBar />
      <div className="container">
      <PostitForm />
      <PostitList />
      </div>
    </div>
  </Fragment>
)

export default App;
