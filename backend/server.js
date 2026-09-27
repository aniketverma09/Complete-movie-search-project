import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();

const app = express();


// ===============================
// CORS CONFIGURATION
// ===============================

const allowedOrigins = [
    "http://localhost:5173",

    // Vercel frontend
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {

            // Allow requests without origin
            // (Postman, server-to-server, etc.)
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(
                new Error("Not allowed by CORS")
            );
        },

        methods: [
            "GET",
            "POST",
            "DELETE",
            "OPTIONS"
        ],

        allowedHeaders: [
            "Content-Type",
            "Authorization"
        ],

        credentials: true
    })
);


// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());


// ===============================
// DATABASE
// ===============================

connectDB();


// ===============================
// ROOT ROUTE
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Global Movie Search API is running."
    });
});


// ===============================
// API ROUTES
// ===============================

app.use("/api/movies", movieRoutes);
app.use("/api/history", historyRoutes);


// ===============================
// OMDb API KEY CHECK
// ===============================

console.log(
    "OMDB_API_KEY:",
    process.env.OMDB_API_KEY
        ? "LOADED ✅"
        : "MISSING ❌"
);


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});