function AddMovieForm({ title, genre, setTitle, setGenre, addMovie }) {

    return (

        <div>

            <h2>Add Movie</h2>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Movie title"
            />

            <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            >

                <option>Action</option>
                <option>Drama</option>
                <option>Comedy</option>

            </select>

            <button onClick={addMovie}>
                Add Movie
            </button>

        </div>

    )

}

export default AddMovieForm
