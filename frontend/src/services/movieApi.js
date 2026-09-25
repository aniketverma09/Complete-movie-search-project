const API_URL = "http://localhost:5000/api";

// ===============================
// SEARCH MOVIES
// ===============================

export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}/movies/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
            errorData.message || "Failed to search movies"
        );
    }

    return response.json();
};


// ===============================
// GET HISTORY
// ===============================

export const getHistory = async () => {
    const response = await fetch(
        `${API_URL}/history`
    );

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
            errorData.message || "Failed to fetch history"
        );
    }

    return response.json();
};


// ===============================
// DELETE ONE HISTORY ITEM
// ===============================

export const deleteHistoryItem = async (id) => {
    const response = await fetch(
        `${API_URL}/history/${id}`,
        {
            method: "DELETE",
        }
    );

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
            errorData.message || "Failed to delete history"
        );
    }

    return response.json();
};


// ===============================
// CLEAR ALL HISTORY
// ===============================

export const clearHistory = async () => {
    const response = await fetch(
        `${API_URL}/history`,
        {
            method: "DELETE",
        }
    );

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
            errorData.message || "Failed to clear history"
        );
    }

    return response.json();
};