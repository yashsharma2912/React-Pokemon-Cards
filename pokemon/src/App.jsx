import React from 'react'
import SeacrhBox  from './seacrhBox'
import axios from 'axios'

const App = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => console.log(response) )
  .catch(error => console.error(error));
  return (
    <>
      <h1>Pokemon cards</h1>
      <SeacrhBox> </SeacrhBox>
    </>
  )
  
}

export default App;