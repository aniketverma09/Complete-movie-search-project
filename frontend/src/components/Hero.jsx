import SearchForm from "./SearchForm.jsx";

function Hero({
    query,
    setQuery,
    country,
    setCountry,
    onSearch,
    loading
}) {

    return (
        <section
            id="home"
            className="
                flex
                min-h-[580px]
                items-center
                justify-center
                px-5
                py-20
                text-center
            "
        >

            <div
                className="
                    w-full
                    max-w-[900px]
                    fade-up
                "
            >

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-[10px]
                        font-bold
                        tracking-[2px]
                        text-gray-400
                    "
                >

                    <span
                        className="
                            h-2
                            w-2
                            rounded-full
                            bg-green-400
                            shadow-[0_0_15px_rgba(74,222,128,0.8)]
                        "
                    />

                    GLOBAL MOVIE DATABASE

                </div>

                <h1
                    className="
                        mt-7
                        text-5xl
                        font-black
                        leading-[0.95]
                        tracking-[-2px]
                        sm:text-6xl
                        md:text-7xl
                        lg:text-[82px]
                    "
                >

                    Find Any Movie

                    <span
                        className="
                            block
                            text-rose-500
                        "
                    >
                        Anywhere.
                    </span>

                </h1>

                <p
                    className="
                        mx-auto
                        mt-6
                        max-w-[650px]
                        text-sm
                        leading-7
                        text-gray-400
                        sm:text-base
                    "
                >
                    Search movies from around the world,
                    explore detailed information and keep
                    track of your searches.
                </p>

                <div className="mt-9">

                    <SearchForm
                        query={query}
                        setQuery={setQuery}
                        country={country}
                        setCountry={setCountry}
                        onSearch={onSearch}
                        loading={loading}
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;