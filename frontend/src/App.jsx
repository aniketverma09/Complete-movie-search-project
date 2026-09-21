import { useEffect, useState } from "react";

import Background from "./components/Background.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import History from "./components/History.jsx";
import MovieModal from "./components/MovieModal.jsx";

import {
    searchMovies,
    getMovieDetails,
    getHistory,
    deleteHistoryItem,
    clearHistory
} from "./services/movieApi.js";

function App() {

    const [query, setQuery] = useState("");
    const [country, setCountry] = useState("");

    const [movies, setMovies] = useState([]);
    const [history, setHistory] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    const [loading, setLoading] = useState(false);
    const [detailsLoading, setDetailsLoading] = useState(false);

    const [error, setError] = useState("");
    const [searched, setSearched] = useState(false);

    const [darkMode, setDarkMode] = useState(true);

    /* =========================
       LOAD THEME + HISTORY
    ========================= */

    useEffect(() => {

        loadHistory();

        const savedTheme =
            localStorage.getItem("movieTheme");

        if (savedTheme === "light") {
            setDarkMode(false);
        }

    }, []);

    /* =========================
       THEME
    ========================= */

    useEffect(() => {

        document.body.classList.toggle(
            "light",
            !darkMode
        );

        localStorage.setItem(
            "movieTheme",
            darkMode ? "dark" : "light"
        );

    }, [darkMode]);

    /* =========================
       HISTORY
    ========================= */

    const loadHistory = async () => {

        try {

            const data = await getHistory();

            setHistory(data.history || []);

        } catch (err) {

            console.error(
                "History Error:",
                err
            );

        }

    };

    /* =========================
       SEARCH
    ========================= */

    const handleSearch = async (
        customQuery = query,
        customCountry = country
    ) => {

        const finalQuery =
            customQuery.trim();

        if (!finalQuery) {

            setError(
                "Please enter a movie name."
            );

            return;
        }

        setLoading(true);
        setError("");
        setSearched(true);
        setMovies([]);

        try {

            const data =
                await searchMovies(
                    finalQuery,
                    customCountry
                );

            setMovies(
                data.movies || []
            );

            await loadHistory();

            setTimeout(() => {

                document
                    .getElementById("results")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }, 100);

        } catch (err) {

            setError(
                err.message ||
                "Unable to search movies."
            );

        } finally {

            setLoading(false);

        }

    };

    /* =========================
       MOVIE DETAILS
    ========================= */

    const handleMovieDetails =
        async (imdbID) => {

            setSelectedMovie({
                Title: "Loading..."
            });

            setDetailsLoading(true);

            try {

                const data =
                    await getMovieDetails(
                        imdbID
                    );

                setSelectedMovie(
                    data.movie
                );

            } catch (err) {

                setError(
                    err.message ||
                    "Unable to load movie details."
                );

                setSelectedMovie(null);

            } finally {

                setDetailsLoading(false);

            }

        };

    /* =========================
       DELETE HISTORY
    ========================= */

    const handleDeleteHistory =
        async (id) => {

            try {

                await deleteHistoryItem(id);

                setHistory((prev) =>
                    prev.filter(
                        (item) =>
                            item.id !== id
                    )
                );

            } catch (err) {

                console.error(
                    "Delete History Error:",
                    err
                );

            }

        };

    /* =========================
       CLEAR HISTORY
    ========================= */

    const handleClearHistory =
        async () => {

            if (!history.length) {
                return;
            }

            const confirmed =
                window.confirm(
                    "Are you sure you want to clear all search history?"
                );

            if (!confirmed) {
                return;
            }

            try {

                await clearHistory();

                setHistory([]);

            } catch (err) {

                console.error(
                    "Clear History Error:",
                    err
                );

            }

        };

    /* =========================
       SEARCH AGAIN
    ========================= */

    const handleSearchAgain =
        (item) => {

            const selectedCountry =
                item.country === "All Countries"
                    ? ""
                    : item.country;

            setQuery(item.query);
            setCountry(selectedCountry);

            handleSearch(
                item.query,
                selectedCountry
            );

        };

    /* =========================
       CLOSE MODAL
    ========================= */

    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div
            className={`
                min-h-screen
                transition-colors
                duration-300
                ${
                    darkMode
                        ? "bg-[#070707] text-white"
                        : "bg-[#f5f6f8] text-[#171717]"
                }
            `}
        >

            <Background />

            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main>

                <Hero
                    query={query}
                    setQuery={setQuery}
                    country={country}
                    setCountry={setCountry}
                    onSearch={handleSearch}
                    loading={loading}
                />

                <MovieGrid
                    movies={movies}
                    loading={loading}
                    searched={searched}
                    error={error}
                    onDetails={handleMovieDetails}
                />

                <History
                    history={history}
                    onSearchAgain={handleSearchAgain}
                    onDelete={handleDeleteHistory}
                    onClear={handleClearHistory}
                />

            </main>

            <MovieModal
                movie={selectedMovie}
                loading={detailsLoading}
                onClose={closeModal}
            />

            <footer
                className={`
                    border-t
                    px-[5%]
                    py-10
                    ${
                        darkMode
                            ? "border-white/10"
                            : "border-black/10"
                    }
                `}
            >

                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-[1200px]
                        flex-col
                        items-center
                        justify-between
                        gap-5
                        md:flex-row
                    "
                >

                    <p
                        className={`
                            text-sm
                            ${
                                darkMode
                                    ? "text-gray-500"
                                    : "text-gray-600"
                            }
                        `}
                    >
                        © 2026 MovieFinder.
                        All rights reserved.
                    </p>

                    <div
                        className="
                            flex
                            gap-3
                        "
                    >

                        <a
                            href="#home"
                            className={`
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                transition
                                ${
                                    darkMode
                                        ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                        : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-black"
                                }
                            `}
                        >
                            <i className="fa-brands fa-github" />
                        </a>

                        <a
                            href="#home"
                            className={`
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                transition
                                ${
                                    darkMode
                                        ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                        : "bg-black/5 text-gray-600 hover:bg-black/10 hover:text-black"
                                }
                            `}
                        >
                            <i className="fa-brands fa-linkedin-in" />
                        </a>

                    </div>

                </div>

                <div
                    className={`
                        mx-auto
                        mt-7
                        w-full
                        max-w-[1200px]
                        border-t
                        pt-5
                        text-center
                        text-[11px]
                        ${
                            darkMode
                                ? "border-white/5 text-gray-600"
                                : "border-black/5 text-gray-500"
                        }
                    `}
                >
                    Built with React + Tailwind CSS
                    + Node.js + MongoDB
                </div>

            </footer>

        </div>
    );
}

export default App;