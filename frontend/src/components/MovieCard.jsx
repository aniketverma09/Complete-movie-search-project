function MovieCard({
    movie,
    onDetails
}) {

    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster";

    return (
        <article
            className="
                movie-card
                overflow-hidden
                rounded-2xl
            "
        >

            <div
                className="
                    group
                    relative
                    h-[270px]
                    overflow-hidden
                    bg-[#111]
                    sm:h-[300px]
                    lg:h-[320px]
                "
            >

                <img
                    src={poster}
                    alt={movie.Title}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-end
                        bg-gradient-to-t
                        from-black/90
                        via-black/20
                        to-transparent
                        p-3
                        opacity-0
                        transition
                        duration-300
                        group-hover:opacity-100
                    "
                >

                    <button
                        onClick={() =>
                            onDetails(
                                movie.imdbID
                            )
                        }
                        className="
                            w-full
                            rounded-lg
                            bg-rose-500
                            py-2.5
                            text-sm
                            font-bold
                            text-white
                            transition
                            hover:bg-rose-600
                        "
                    >
                        <i className="fa-solid fa-circle-info mr-2" />
                        View Details
                    </button>

                </div>

            </div>

            <div className="p-4">

                <h3
                    title={movie.Title}
                    className="
                        truncate
                        text-sm
                        font-bold
                    "
                >
                    {movie.Title}
                </h3>

                <div
                    className="
                        mt-2.5
                        flex
                        items-center
                        justify-between
                        gap-2
                        text-[11px]
                        text-gray-500
                    "
                >

                    <span>
                        <i className="fa-regular fa-calendar mr-1" />
                        {movie.Year}
                    </span>

                    <span className="uppercase">
                        {movie.Type}
                    </span>

                </div>

            </div>

        </article>
    );
}

export default MovieCard;