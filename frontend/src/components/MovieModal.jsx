function MovieModal({
    movie,
    loading,
    onClose
}) {

    if (!movie) {
        return null;
    }

    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster";

    return (
        <div
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center
                bg-black/80
                p-4
                backdrop-blur-md
                sm:p-6
            "
            onClick={onClose}
        >

            <div
                onClick={(e) =>
                    e.stopPropagation()
                }
                className="
                    modal-box
                    relative
                    max-h-[90vh]
                    w-full
                    max-w-[850px]
                    overflow-y-auto
                    rounded-2xl
                    p-5
                    sm:p-7
                "
            >

                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="
                        absolute
                        right-4
                        top-4
                        z-10
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-black/70
                        text-white
                        transition
                        hover:bg-rose-500
                    "
                >

                    <i className="fa-solid fa-xmark" />

                </button>

                {loading ? (

                    <div
                        className="
                            flex
                            min-h-[400px]
                            items-center
                            justify-center
                        "
                    >

                        <div
                            className="
                                h-11
                                w-11
                                animate-spin
                                rounded-full
                                border-[3px]
                                border-white/10
                                border-t-rose-500
                            "
                        />

                    </div>

                ) : (

                    <div
                        className="
                            grid
                            gap-7
                            md:grid-cols-[250px_1fr]
                        "
                    >

                        <div>

                            <img
                                src={poster}
                                alt={movie.Title}
                                className="
                                    mx-auto
                                    w-full
                                    max-w-[300px]
                                    rounded-xl
                                    object-cover
                                "
                            />

                        </div>

                        <div className="pt-1">

                            <span
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-rose-500
                                "
                            >
                                {movie.Type}
                            </span>

                            <h2
                                className="
                                    mt-2
                                    pr-10
                                    text-2xl
                                    font-bold
                                    sm:text-3xl
                                "
                            >
                                {movie.Title}
                            </h2>

                            <div
                                className="
                                    my-5
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-amber-400/10
                                    px-3
                                    py-2
                                    text-sm
                                "
                            >
                                ⭐
                                <span>
                                    {movie.imdbRating || "N/A"}
                                </span>
                            </div>

                            <div
                                className="
                                    space-y-2
                                    text-sm
                                    leading-6
                                    text-gray-400
                                "
                            >

                                <Info
                                    label="Year"
                                    value={movie.Year}
                                />

                                <Info
                                    label="Runtime"
                                    value={movie.Runtime}
                                />

                                <Info
                                    label="Genre"
                                    value={movie.Genre}
                                />

                                <Info
                                    label="Director"
                                    value={movie.Director}
                                />

                                <Info
                                    label="Actors"
                                    value={movie.Actors}
                                />

                                <Info
                                    label="Language"
                                    value={movie.Language}
                                />

                                <Info
                                    label="Country"
                                    value={movie.Country}
                                />

                            </div>

                            <div
                                className="
                                    mt-5
                                    border-t
                                    border-white/10
                                    pt-5
                                "
                            >

                                <strong className="text-sm">
                                    Plot
                                </strong>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-7
                                        text-gray-400
                                    "
                                >
                                    {movie.Plot}
                                </p>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

function Info({
    label,
    value
}) {

    return (
        <p>
            <strong className="text-gray-200">
                {label}:
            </strong>{" "}
            {value || "N/A"}
        </p>
    );
}

export default MovieModal;