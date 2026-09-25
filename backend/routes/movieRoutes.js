import express from "express";
import { searchMoviesFromOMDb } from "../services/omdbService.js";

const router = express.Router();

router.get("/search", async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({
                message: "Search query is required."
            });
        }

        const movies = await searchMoviesFromOMDb(query);

        res.json({
            success: true,
            movies
        });

    } catch (error) {
        console.error("Movie Search Error:", error);

        res.status(500).json({
            message: "Unable to search movies.",
            error: error.message
        });
    }
});

export default router;