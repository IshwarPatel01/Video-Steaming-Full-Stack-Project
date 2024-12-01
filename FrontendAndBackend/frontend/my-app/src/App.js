import { response } from "express";
import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const [jokes, setJokes] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3000/api/jokes")
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })
    

  return (
   <>
   <h1>full stack backend</h1>
   <p>Jokes: {jokes.length}</p>
    {
      jokes.map((jokes, index) => {
        <div key={index}>
          <h1>{jokes.title}</h1>
        </div>
      })
    }
   </>
  );
}

  export default App;
