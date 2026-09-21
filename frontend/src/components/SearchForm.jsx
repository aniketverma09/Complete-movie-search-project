function SearchForm({
    query,
    setQuery,
    country,
    setCountry,
    onSearch,
    loading
}) {

    const handleSubmit = (e) => {

        e.preventDefault();

        onSearch();

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
                glass
                mx-auto
                grid
                w-full
                max-w-[850px]
                grid-cols-1
                gap-2
                rounded-2xl
                p-2
                sm:grid-cols-[1fr_170px]
                md:grid-cols-[1fr_180px_120px]
            "
        >

            {/* SEARCH */}

            <div
                className="
                    flex
                    min-w-0
                    items-center
                "
            >

                <i
                    className="
                        fa-solid
                        fa-magnifying-glass
                        ml-3
                        shrink-0
                        text-gray-500
                    "
                />

                <input
                    type="text"
                    value={query}
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                    placeholder="Search for a movie..."
                    className="
                        movie-input
                        h-[50px]
                        w-full
                        min-w-0
                        bg-transparent
                        px-3
                        outline-none
                    "
                />

            </div>

            {/* COUNTRY */}

            <div
                className="
                    flex
                    min-w-0
                    items-center
                "
            >

                <i
                    className="
                        fa-solid
                        fa-globe
                        ml-3
                        shrink-0
                        text-gray-500
                    "
                />

                <select
                    value={country}
                    onChange={(e) =>
                        setCountry(e.target.value)
                    }
                    className="
                        movie-select
                        h-[50px]
                        w-full
                        min-w-0
                        cursor-pointer
                        bg-transparent
                        px-3
                        outline-none
                    "
                >

                    <option value="">
                        All Countries
                    </option>

                    <option value="India">
                        India
                    </option>

                    <option value="USA">
                        USA
                    </option>

                    <option value="UK">
                        UK
                    </option>

                    <option value="Korea">
                        Korea
                    </option>

                    <option value="Japan">
                        Japan
                    </option>

                    <option value="France">
                        France
                    </option>

                    <option value="China">
                        China
                    </option>

                    <option value="Canada">
                        Canada
                    </option>

                    <option value="Australia">
                        Australia
                    </option>

                </select>

            </div>

            {/* BUTTON */}

            <button
                type="submit"
                disabled={loading}
                className="
                    h-[50px]
                    rounded-xl
                    bg-rose-500
                    px-5
                    font-bold
                    text-white
                    transition
                    hover:-translate-y-0.5
                    hover:bg-rose-600
                    hover:shadow-[0_12px_30px_rgba(244,63,94,0.25)]
                    disabled:cursor-wait
                    disabled:opacity-60
                "
            >

                {loading ? (
                    <>
                        <i className="fa-solid fa-spinner fa-spin mr-2" />
                        Searching
                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-search mr-2" />
                        Search
                    </>
                )}

            </button>

        </form>
    );
}

export default SearchForm;