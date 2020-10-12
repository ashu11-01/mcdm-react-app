import React from 'react';
import Navbar from './navbar';
import About from './About'
import Contact from './Contact'
import Content from './content'
import Footer from './footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Content}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
