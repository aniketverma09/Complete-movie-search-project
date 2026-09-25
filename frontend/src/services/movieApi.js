const API_BASE = "https://complete-movie-search-project.onrender.com";

// =========================================
// SEARCH MOVIES
// =========================================

export async function searchMovies(query, country = "") {

    const url =
        `${API_BASE}/movies/search` +
        `?q=${encodeURIComponent(query)}` +
        `&country=${encodeURIComponent(country)}`;
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Unable to search movies."
        );
    }

    return data;
}

// =========================================
// MOVIE DETAILS
// =========================================

export async function getMovieDetails(imdbID) {

    const response = await fetch(
        `${API_BASE}/movies/${imdbID}`
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Unable to get movie details."
        );
    }

    return data;
}

// =========================================
// GET HISTORY
// =========================================

export async function getHistory() {

    const response = await fetch(
        `${API_BASE}/history`
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Unable to load history."
        );
    }

    return data;
}

// =========================================
// DELETE HISTORY
// =========================================

export async function deleteHistoryItem(id) {

    const response = await fetch(
        `${API_BASE}/history/${id}`,
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Unable to delete history."
        );
    }

    return data;
}

// =========================================
// CLEAR HISTORY
// =========================================

export async function clearHistory() {

    const response = await fetch(
        `${API_BASE}/history`,
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Unable to clear history."
        );
    }

    return data;
}