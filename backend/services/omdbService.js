const OMDB_URL = "https://www.omdbapi.com/";

export const searchMoviesFromOMDb = async (query) => {
    try {
        const url =
            `${OMDB_URL}?apikey=${process.env.OMDB_API_KEY}` +
            `&s=${encodeURIComponent(query)}` +
            `&type=movie`;

        console.log(
            "OMDb URL:",
            url.replace(process.env.OMDB_API_KEY, "HIDDEN")
        );

        const response = await fetch(url);

        console.log("OMDb Status:", response.status);

        const data = await response.json();

        console.log("OMDb Response:", data);

        if (data.Response === "False") {
            throw new Error(data.Error || "OMDb search failed");
        }

        return data.Search || [];

    } catch (error) {
        console.error("OMDb ERROR:", error.message);
        throw error;
    }
};