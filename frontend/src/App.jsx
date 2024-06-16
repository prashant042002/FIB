import { useState } from 'react'

import './App.css'
import axios from 'axios';
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then(response => {
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
      <h1> hello world how are u??</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) =>(
          <div key={joke.text}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
            <br />
          </div>
        ))
      }
    </>
  )
}

export default App
