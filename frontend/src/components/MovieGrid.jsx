import MovieCard from "./MovieCard.jsx";
import Loader from "./Loader.jsx";

function MovieGrid({
    movies,
    loading,
    searched,
    error,
    onDetails
}) {

    return (
        <section
            id="results"
            className="
                scroll-mt-20
                py-20
            "
        >

            <div
                className="
                    mx-auto
                    w-[92%]
                    max-w-[1200px]
                "
            >

                <div
                    className="
                        mb-9
                        flex
                        items-end
                        justify-between
                        gap-5
                    "
                >

                    <div>

                        <span
                            className="
                                text-[11px]
                                font-extrabold
                                tracking-[2px]
                                text-rose-500
                            "
                        >
                            MOVIES
                        </span>

                        <h2
                            className="
                                mt-2
                                text-3xl
                                font-bold
                                sm:text-4xl
                            "
                        >
                            Search Results
                        </h2>

                    </div>

                    <i
                        className="
                            fa-solid
                            fa-film
                            hidden
                            text-3xl
                            text-gray-600
                            sm:block
                        "
                    />

                </div>

                {error && (

                    <div
                        className="
                            mb-6
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-rose-500/20
                            bg-rose-500/10
                            px-5
                            py-4
                            text-sm
                            text-rose-400
                        "
                    >

                        <i className="fa-solid fa-circle-exclamation mt-0.5" />

                        <span>
                            {error}
                        </span>

                    </div>

                )}

                {loading && <Loader />}

                {!loading &&
                    movies.length > 0 && (

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-3
                            sm:grid-cols-3
                            md:grid-cols-4
                            lg:grid-cols-5
                            lg:gap-5
                        "
                    >

                        {movies.map((movie) => (

                            <MovieCard
                                key={movie.imdbID}
                                movie={movie}
                                onDetails={onDetails}
                            />

                        ))}

                    </div>

                )}

                {!loading &&
                    searched &&
                    !error &&
                    movies.length === 0 && (

                    <EmptyState
                        icon="fa-film"
                        title="No Movies Found"
                        text="Try another movie name or country."
                    />

                )}

                {!searched &&
                    !loading && (

                    <EmptyState
                        icon="fa-clapperboard"
                        title="Start Searching"
                        text="Search for any movie from around the world."
                    />

                )}

            </div>

        </section>
    );
}

function EmptyState({
    icon,
    title,
    text
}) {

    return (
        <div
            className="
                flex
                min-h-[260px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-white/10
                px-5
                text-center
                text-gray-500
            "
        >

            <i
                className={`
                    fa-solid
                    ${icon}
                    mb-5
                    text-4xl
                    text-gray-600
                `}
            />

            <h3
                className="
                    mb-2
                    text-lg
                    font-bold
                    text-gray-400
                "
            >
                {title}
            </h3>

            <p className="text-sm">
                {text}
            </p>

        </div>
    );
}

export default MovieGrid;