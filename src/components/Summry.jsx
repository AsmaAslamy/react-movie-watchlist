function Summary({ movies }) {

    const total = movies.length

    const watched = movies.filter(m => m.watched).length

    const unwatched = movies.filter(m => !m.watched).length

    return (

        <div className="summary">

            <h2>Summary</h2>

            <p>Total: {total}</p>

            <p>Watched: {watched}</p>

            <p>Unwatched: {unwatched}</p>

        </div>

    )

}

export default Summary
