import { useState } from "react"
import './App.css'
import AddMovieForm from "./components/AddMovieFrom"
import FilterControls from "./components/FilerControls"
import MovieList from "./components/MovieList"
import Summary from "./components/Summry"

// function createID(){
//   if (typeof crypto !== "undefined" && crypto.randomUUID){
//     return crypto.randomUUID();
//   }
// }


function App() {

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("Action")
  const [filter, setFilter] = useState("All")

  function addMovie() {

    if (title.trim() === "") return

    const newMovie = {
      id: Date.now(),
      title: title,
      genre: genre,
      watched: false
    }

    setMovies([...movies, newMovie])
    setTitle("")

  }

  function toggleWatched(id) {

    setMovies(

      movies.map(movie =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )

    )

  }

  function deleteMovie(id) {

    setMovies(

      movies.filter(movie => movie.id !== id)

    )

  }

  let filteredMovies = movies

  if (filter === "Watched") {
    filteredMovies = movies.filter(m => m.watched)
  }

  if (filter === "Unwatched") {
    filteredMovies = movies.filter(m => !m.watched)
  }

  return (

    <div className="conainer">

      <h1>Movie Watchlist</h1>

      <AddMovieForm
        title={title}
        genre={genre}
        setTitle={setTitle}
        setGenre={setGenre}
        addMovie={addMovie}
      ></AddMovieForm>

      <FilterControls setFilter={setFilter} />

      <MovieList
        movies={filteredMovies}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />

      <Summary movies={movies} />

    </div>

  )

}


export default App

