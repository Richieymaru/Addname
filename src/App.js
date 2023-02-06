import { useState } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './component/Navigation';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Service } from './pages/Service';

function App() {
  const [jhonasAnn, setJhonasAnn] = useState("Jhonas");
  return(
    <div className="App" style={{fontFamily: "Montserrat"}} >
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home username={jhonasAnn} setJhonasAnn={setJhonasAnn}/>}/>
          <Route path='/service' element={<Service username={jhonasAnn} />}/>
          <Route path='/about' element={<About username={jhonasAnn} />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;