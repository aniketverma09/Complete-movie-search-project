const OMDB_URL = "https://www.omdbapi.com/";

export const searchMoviesFromOMDb = async (query) => {
    try {
        const apiKey = process.env.OMDB_API_KEY;

        console.log("OMDB KEY STATUS:", apiKey ? "LOADED ✅" : "MISSING ❌");
        console.log("SEARCH QUERY:", query);

        const url =
            `${OMDB_URL}?apikey=${apiKey}` +
            `&s=${encodeURIComponent(query)}` +
            `&type=movie`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("OMDb Status:", response.status);
        console.log("OMDb Response:", data);

        if (data.Response === "False") {
            throw new Error(data.Error || "OMDb request failed");
        }

        return data.Search || [];

    } catch (error) {
        console.error("OMDB ERROR:", error.message);
        throw error;
    }
};