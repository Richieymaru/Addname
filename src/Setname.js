import { useState, createContext } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './component/Navigation';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Service } from './pages/Service';

export const AppContext = createContext();

function App() {

  const [jhonasAnn, setJhonasAnn] = useState("Jhonas");
  return(
    <div className="App" style={{fontFamily: "Montserrat"}} >
      <AppContext.Provider value={{jhonasAnn, setJhonasAnn}}>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;