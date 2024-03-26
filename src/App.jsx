import { useState } from 'react'
import './App.css'
import Movies from './Movies'

function App() {

  const [movies, setMovies] = useState([])

  const pobierzDaneOFilmach = () => {
    fetch("https://swapi.dev/api/films")
    .then(response =>{
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
    .catch(err => console.log(err.message))
  }

  return (
    <>
      <h1>Super filmy</h1>
      <button onClick={pobierzDaneOFilmach}>Pobierz dane</button>
      <Movies listaFilmow={movies}/>
    </>
  )
}

export default App
