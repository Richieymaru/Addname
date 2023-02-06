import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  const [showText, setShowText] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res)=> {
      setShowText(res.data.fact);
    });
  }
  useEffect(() => {
    fetchCatFact();
  },[]);

  return(<div className='App'>
    <button onClick={fetchCatFact}>Cat Fact Generate</button>
    <p>{showText}</p>
  </div>);


}

export default App;
