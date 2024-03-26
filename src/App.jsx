import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies'

function App() {
  const pobierzDaneOFilmach = () => {
    fetch("https://swapi.dev/api/films")
    .then(response =>{
      console.log(response)
      return response.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <h1>Super filmy</h1>
      <button onClick={pobierzDaneOFilmach}>Pobierz dane</button>
      <Movies/>
    </>
  )
}

export default App
