import React from 'react';
import Header from './header'
import Footer from './footer'
import Content from './content'
import Navbar from './navbar';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Content/>
     <Footer />
    </div>
  );
}

export default App;
