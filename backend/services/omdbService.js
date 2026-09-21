const OMDB_URL = "https://www.omdbapi.com/";

export const searchMoviesFromOMDb = async (query) => {
    try {
        const url =
            `${OMDB_URL}?apikey=${process.env.OMDB_API_KEY}` +
            `&s=${encodeURIComponent(query)}` +
            `&type=movie`;

        console.log("OMDb Search URL:", url.replace(process.env.OMDB_API_KEY, "HIDDEN"));

        const response = await fetch(url);

        const data = await response.json();

        console.log("OMDb Response:", data);

        if (data.Response === "False") {
            throw new Error(data.Error || "Movie search failed.");
        }

        return data.Search || [];

    } catch (error) {
        console.error("OMDb Search Error:", error.message);
        throw error;
    }
};


/* =========================================
   MOVIE DETAILS
========================================= */

export const getMovieFromOMDb = async (imdbID) => {
    try {
        const url =
            `${OMDB_URL}?apikey=${process.env.OMDB_API_KEY}` +
            `&i=${encodeURIComponent(imdbID)}` +
            `&plot=full`;

        const response = await fetch(url);

        const data = await response.json();

        console.log("OMDb Details Response:", data);

        if (data.Response === "False") {
            throw new Error(
                data.Error || "Movie not found."
            );
        }

        return data;

    } catch (error) {
        console.error("OMDb Details Error:", error.message);
        throw error;
    }
};