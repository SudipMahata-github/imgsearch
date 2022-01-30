// import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import "./index.css"
function App() {
  const [photo, setPhoto] = useState("")
  const [data, setData]= useState([])
  const getImage = ()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=5tmd4M3TFpV5LH0xI2DNy-_nj3U87awEpjAEDasVBG0`)
   .then((response)=>{
      setData(response.data.results)
    }).catch((err)=>{
      console.log(err);
    })
  }
  return <div className="main">
       <div className="nav">
       <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} className="input"
       placeholder="search here"/>
        <button onClick={getImage} className="btn">SEARCH</button>
       </div>
     <div className="allCards">
   {
     data.map((data)=>{
       return <Card photo={data}/>
     })
   }
  </div>;
  </div>
}

export default App;
