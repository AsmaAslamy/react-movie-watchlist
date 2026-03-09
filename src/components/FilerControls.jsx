function FilterControls({ setFilter }) {

    return (

        <div>

            <h2>Filter</h2>

            <button onClick={() => setFilter("All")}>
                All
            </button>

            <button onClick={() => setFilter("Watched")}>
                Watched
            </button>

            <button onClick={() => setFilter("Unwatched")}>
                Unwatched
            </button>

        </div>

    )

}

export default FilterControls