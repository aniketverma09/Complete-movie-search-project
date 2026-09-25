const API_URL = "https://YOUR-RENDER-BACKEND.onrender.com/api";

export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}/movies/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Failed to search movies");
    }

    return response.json();
};

export const getHistory = async () => {
    const response = await fetch(`${API_URL}/history`);

    if (!response.ok) {
        throw new Error("Failed to fetch history");
    }

    return response.json();
};

export const deleteHistory = async (id) => {
    const response = await fetch(`${API_URL}/history/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete history");
    }

    return response.json();
};