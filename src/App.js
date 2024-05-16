import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch ('https://www.googleapis.com/books/v1/volumes?q=danbrown')
    .then (resp => resp.json())
    .then (data => setData(data.items) )
    console.log(data)
  
  },[])

  return (
     <div>
       {
     data?.map((d)=>
     (
      <>
      <h1>{d?.volumeInfo.title}</h1>
      <p>{d?.volumeInfo.subtitle}</p>
      <img src={d?.volumeInfo.imageLinks.smallThumbnail} alt=''/>
      </>
      
     )
     )
   }  
     </div>

     
  );
}

export default App;
