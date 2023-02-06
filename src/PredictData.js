import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");   
  const [predictedData, setPredictedData] = useState([]);    

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedData(res.data);
    });
  }

    return(
        <div className='App'>
            <input placeholder="Ex. Pedro..." onChange={(event) => { setName(event.target.value);}}/>
            <button onClick={fetchData}>Predict Age</button>
            <h1>Predict Name: {predictedData.name}</h1>
            <h1>Predict Age: {predictedData.age}</h1>
            <h1>Predict Count: {predictedData.count}</h1>
        </div>
    );
};

export default App;