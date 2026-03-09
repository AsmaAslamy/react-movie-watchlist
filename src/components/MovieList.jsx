function MovieList({ movies, toggleWatched, deleteMovie }) {

    if (movies.length === 0) {
        return <p>Please add a movie</p>
    }

    return (

        <div>

            <h2>Movies</h2>

            {movies.map(movie => (

                <div key={movie.id} className="summary">

                    <h3>{movie.title}</h3>

                    <p>{movie.genre}</p>

                    <p>{movie.watched ? "Watched" : "Unwatched"}</p>

                    <button onClick={() => toggleWatched(movie.id)}>
                        Toggle Watched
                    </button>

                    <button onClick={() => deleteMovie(movie.id)}>
                        Delete
                    </button>

                </div>

            ))}

        </div>

    )

}

export default MovieList


