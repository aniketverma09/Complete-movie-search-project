const API_URL = "https://complete-movie-search-project.onrender.com";

// ===============================
// SEARCH MOVIES
// ===============================

export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}/api/movies/search?query=${encodeURIComponent(query)}`
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to search movies"
        );
    }

    return data;
};


// ===============================
// GET HISTORY
// ===============================

export const getHistory = async () => {
    const response = await fetch(
        `${API_URL}/api/history`
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch history"
        );
    }

    return data;
};


// ===============================
// DELETE ONE HISTORY ITEM
// ===============================

export const deleteHistoryItem = async (id) => {
    const response = await fetch(
        `${API_URL}/api/history/${id}`,
        {
            method: "DELETE",
        }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to delete history"
        );
    }

    return data;
};


// ===============================
// CLEAR ALL HISTORY
// ===============================

export const clearHistory = async () => {
    const response = await fetch(
        `${API_URL}/api/history`,
        {
            method: "DELETE",
        }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to clear history"
        );
    }

    return data;
};