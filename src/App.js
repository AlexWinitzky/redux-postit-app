import React, { Fragment } from 'react';
import PostitList from './components/PostitList'
import PostitForm from './components/PostitForm'
import Footer from './components/Footer'
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <Fragment>
    <div>
      <PostitForm />
      <PostitList />
      <Footer />
    </div>
  </Fragment>
)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
