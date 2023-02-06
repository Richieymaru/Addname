import Axios from "axios";
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [excuseData, setExcuseData] = useState([]);    

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setExcuseData(res.data[0]);
    });
  }

    return(
        <div className='App'>
            <h1>Generate an Excuse</h1>
            <button onClick={() => fetchData("party")}>Party</button>
            <button onClick={() => fetchData("family")}>Family</button>
            <button onClick={() => fetchData("office")}>Office</button>
            <h1>Excuse Id: {excuseData.id}</h1>
            <h1>Excuse Situation: {excuseData.excuse}</h1>
            <h1>Excuse Category: {excuseData.category}</h1>
        </div>
    );
};

export default App;