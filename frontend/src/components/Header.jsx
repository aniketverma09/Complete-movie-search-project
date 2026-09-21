function Header({
    darkMode,
    setDarkMode
}) {

    return (
        <header
            className={`
                sticky
                top-0
                z-50
                border-b
                backdrop-blur-xl
                ${
                    darkMode
                        ? "border-white/10 bg-black/70"
                        : "border-black/10 bg-white/75"
                }
            `}
        >

            <div
                className="
                    mx-auto
                    flex
                    min-h-[70px]
                    w-[92%]
                    max-w-[1200px]
                    items-center
                    justify-between
                    gap-5
                "
            >

                <a
                    href="#home"
                    className="
                        flex
                        items-center
                        gap-2.5
                        text-xl
                        font-extrabold
                    "
                >

                    <i
                        className="
                            fa-solid
                            fa-film
                            text-2xl
                            text-rose-500
                        "
                    />

                    <span>
                        Movie
                        <span className="text-rose-500">
                            Finder
                        </span>
                    </span>

                </a>

                <nav
                    className="
                        hidden
                        items-center
                        gap-8
                        md:flex
                    "
                >

                    <a
                        href="#home"
                        className={`
                            text-sm
                            transition
                            hover:text-rose-500
                            ${
                                darkMode
                                    ? "text-white"
                                    : "text-gray-800"
                            }
                        `}
                    >
                        Home
                    </a>

                    <a
                        href="#results"
                        className={`
                            text-sm
                            transition
                            hover:text-rose-500
                            ${
                                darkMode
                                    ? "text-gray-400"
                                    : "text-gray-600"
                            }
                        `}
                    >
                        Results
                    </a>

                    <a
                        href="#history"
                        className={`
                            text-sm
                            transition
                            hover:text-rose-500
                            ${
                                darkMode
                                    ? "text-gray-400"
                                    : "text-gray-600"
                            }
                        `}
                    >
                        History
                    </a>

                </nav>

                <button
                    onClick={() =>
                        setDarkMode(
                            (prev) => !prev
                        )
                    }
                    aria-label="Toggle theme"
                    className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition
                        ${
                            darkMode
                                ? "border-white/15 bg-white/5 text-yellow-300 hover:bg-white/10"
                                : "border-black/10 bg-black/5 text-gray-700 hover:bg-black/10"
                        }
                    `}
                >

                    <i
                        className={
                            darkMode
                                ? "fa-solid fa-sun"
                                : "fa-solid fa-moon"
                        }
                    />

                </button>

            </div>

        </header>
    );
}

export default Header;