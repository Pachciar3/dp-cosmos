import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
