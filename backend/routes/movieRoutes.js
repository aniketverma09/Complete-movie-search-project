import express from "express";

import {
    searchMoviesFromOMDb,
    getMovieFromOMDb
} from "../services/omdbService.js";

import SearchHistory from "../models/SearchHistory.js";

const router = express.Router();


/* =========================================
   COUNTRY ALIASES
========================================= */

const countryAliases = {
    USA: "United States",
    UK: "United Kingdom",
    Korea: "Korea",
    Japan: "Japan",
    India: "India",
    France: "France",
    China: "China",
    Canada: "Canada",
    Australia: "Australia"
};


/* =========================================
   SEARCH MOVIES
   GET /api/movies/search?q=batman&country=USA
========================================= */

router.get("/search", async (req, res) => {

    try {

        const query =
            req.query.q?.trim();

        const country =
            req.query.country?.trim() || "";

        if (!query) {

            return res.status(400).json({
                message: "Movie search query is required."
            })

        }

        /* Search OMDb */

        const movies =
            await searchMoviesFromOMDb(
                query
            );

        let filteredMovies = movies;


        /* Country filter */

        if (country) {

            const targetCountry =
                countryAliases[country] ||
                country;

            const detailedMovies =
                await Promise.all(

                    movies.map(async (movie) => {

                        try {

                            return await getMovieFromOMDb(
                                movie.imdbID
                            );

                        } catch {

                            return null;

                        }

                    })

                );

            filteredMovies =
                detailedMovies
                    .filter(Boolean)
                    .filter((movie) =>
                        movie.Country
                            ?.toLowerCase()
                            .includes(
                                targetCountry.toLowerCase()
                            )
                    );

        }


        /* Save history */

        const historyCountry =
            country || "All Countries";

        await SearchHistory.findOneAndUpdate(
            {
                query: query.toLowerCase(),
                country: historyCountry
            },
            {
                query,
                country: historyCountry
            },
            {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true
            }
        );


        /* Return response */

        res.json({
            success: true,
            movies: filteredMovies
        });

    } catch (error) {

        console.error(
            "Movie Search Error:",
            error
        );

        res.status(500).json({
            message:
                "Unable to search movies."
        });

    }

});


/* =========================================
   MOVIE DETAILS
   GET /api/movies/:id
========================================= */

router.get("/:id", async (req, res) => {

    try {

        const movie =
            await getMovieFromOMDb(
                req.params.id
            );

        res.json({
            success: true,
            movie
        });

   } catch (error) {

    console.error("Movie Search Error:", error);

    res.status(500).json({
        success: false,
        message: error.message || "Unable to search movies.",
        error: error.toString()
    });
}
});


export default router;