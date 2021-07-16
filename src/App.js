import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import Details from './components/Details'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  const baseURL = 'https://swapi.dev/api/people'

  const openDetails = (id) => setCurrentCharacter(characterData[id])
  const closeDetails = () => setCurrentCharacter(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get({baseURL})
      .then(res => setCharacterData(res.data))
      .catch(err => console.log(err))
      .finally(console.log('Fin'))
  },[])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characterData.map((char, index) => {
          return <Character key={index} data= {char} open={openDetails} />
        })
      }
      {
        currentCharacter && <Details currentCharacterData={currentCharacter} close={closeDetails} />
      }
    </div>
  );
}

export default App;
