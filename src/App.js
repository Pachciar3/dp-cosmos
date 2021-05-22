import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
      <span className="background-dot background-dot--1"></span>
      <span className="background-dot background-dot--2"></span>
      <span className="background-dot background-dot--3"></span>
      <span className="background-dot background-dot--4"></span>
      <span className="background-circle background-circle--1"></span>
      <span className="background-circle background-circle--2"></span>
      <span className="background-circle background-circle--3"></span>
    </div>
  );
}

export default App;
