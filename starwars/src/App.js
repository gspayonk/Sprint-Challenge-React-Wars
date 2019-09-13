import React from 'react';
import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import CharacterInfo from './components/StarWars';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setInfo] = useState ([]);

    useEffect(() => {
    
        axios
        .get(`https://swapi.co/api/people`)

        .then(response => {
            console.log(response.data.results);
            setInfo(response.data.results);
        })

        .catch(error => {
            console.log('Sorry! The galaxy resident you want to explore is out of reach.', error);
        });
    }, []);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <CharacterInfo characters={characters}/>

    </div>
  );
}

export default App;
