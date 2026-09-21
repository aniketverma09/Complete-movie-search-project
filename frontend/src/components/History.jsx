function History({
    history,
    onSearchAgain,
    onDelete,
    onClear
}) {

    const formatDate = (date) => {

        return new Date(date).toLocaleString(
            "en-IN",
            {
                dateStyle: "medium",
                timeStyle: "short"
            }
        );

    };

    return (
        <section
            id="history"
            className="
                scroll-mt-20
                border-t
                border-white/5
                bg-white/[0.015]
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
                        gap-4
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
                            YOUR SEARCHES
                        </span>

                        <h2
                            className="
                                mt-2
                                text-3xl
                                font-bold
                                sm:text-4xl
                            "
                        >
                            Search History
                        </h2>

                    </div>

                    <button
                        onClick={onClear}
                        disabled={!history.length}
                        className="
                            shrink-0
                            rounded-lg
                            border
                            border-white/10
                            px-3
                            py-2.5
                            text-xs
                            text-gray-400
                            transition
                            hover:border-rose-500
                            hover:text-rose-500
                            disabled:cursor-not-allowed
                            disabled:opacity-40
                            sm:px-4
                            sm:text-sm
                        "
                    >

                        <i className="fa-solid fa-trash mr-2" />

                        <span className="hidden sm:inline">
                            Clear All
                        </span>

                        <span className="sm:hidden">
                            Clear
                        </span>

                    </button>

                </div>

                {history.length > 0 ? (

                    <div
                        className="
                            flex
                            flex-col
                            gap-2.5
                        "
                    >

                        {history.map((item) => (

                            <div
                                key={item.id}
                                className="
                                    history-item
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                    rounded-xl
                                    p-3
                                    sm:gap-5
                                    sm:p-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        min-w-0
                                        items-center
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            grid
                                            h-10
                                            w-10
                                            shrink-0
                                            place-items-center
                                            rounded-lg
                                            bg-rose-500/10
                                            text-rose-500
                                        "
                                    >

                                        <i className="fa-solid fa-clock-rotate-left" />

                                    </div>

                                    <div className="min-w-0">

                                        <h3
                                            className="
                                                truncate
                                                text-sm
                                                font-bold
                                            "
                                        >
                                            {item.query}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                truncate
                                                text-[10px]
                                                text-gray-500
                                                sm:text-[11px]
                                            "
                                        >
                                            {item.country} •{" "}
                                            {formatDate(item.time)}
                                        </p>

                                    </div>

                                </div>

                                <div
                                    className="
                                        flex
                                        shrink-0
                                        gap-1.5
                                        sm:gap-2
                                    "
                                >

                                    <button
                                        onClick={() =>
                                            onSearchAgain(item)
                                        }
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-white/10
                                            text-gray-400
                                            transition
                                            hover:bg-white/10
                                            hover:text-white
                                        "
                                        title="Search again"
                                    >

                                        <i className="fa-solid fa-rotate-right" />

                                    </button>

                                    <button
                                        onClick={() =>
                                            onDelete(item.id)
                                        }
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-white/10
                                            text-gray-400
                                            transition
                                            hover:border-rose-500/30
                                            hover:text-rose-500
                                        "
                                        title="Delete"
                                    >

                                        <i className="fa-solid fa-trash" />

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

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
                            className="
                                fa-solid
                                fa-clock-rotate-left
                                mb-4
                                text-4xl
                                text-gray-600
                            "
                        />

                        <h3
                            className="
                                mb-2
                                text-lg
                                font-bold
                                text-gray-400
                            "
                        >
                            No Search History
                        </h3>

                        <p className="text-sm">
                            Your searches will appear here.
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
}

export default History;