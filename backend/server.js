import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import movieRoutes from "./routes/movieRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";

// =========================================
// ENVIRONMENT
// =========================================

dotenv.config();

// =========================================
// APP
// =========================================

const app = express();

// =========================================
// CORS
// =========================================

const allowedOrigins = [
    "http://localhost:5173",
    "https://complete-movie-search-project.vercel.app"
];

app.use(
    cors({
        origin: function (origin, callback) {

            // Allow requests without origin
            // such as Postman/server requests
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

        methods: ["GET", "POST", "DELETE", "OPTIONS"],

        allowedHeaders: [
            "Content-Type",
            "Authorization"
        ]
    })
);

// =========================================
// BODY PARSER
// =========================================

app.use(express.json());

// =========================================
// ROOT
// =========================================

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Global Movie Search API is running."
    });

});

// =========================================
// ROUTES
// =========================================

app.use(
    "/api/movies",
    movieRoutes
);

app.use(
    "/api/history",
    historyRoutes
);

// =========================================
// ERROR HANDLER
// =========================================

app.use(
    (err, req, res, next) => {

        console.error(
            "Server Error:",
            err.message
        );

        res.status(500).json({
            success: false,
            message: "Internal server error."
        });

    }
);

// =========================================
// PORT
// =========================================

const PORT =
    process.env.PORT || 5000;

// =========================================
// START SERVER
// =========================================

const startServer = async () => {

    try {

        await connectDB();

        app.listen(
            PORT,
            () => {

                console.log(
                    `Server running on port ${PORT}`
                );

            }
        );

    } catch (error) {

        console.error(
            "Server startup failed:",
            error.message
        );

        process.exit(1);

    }

};

startServer();