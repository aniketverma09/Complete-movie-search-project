import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import movieRoutes from "./routes/movieRoutes.js"
import historyRoutes from "./routes/historyRoutes.js";


/* =========================================
   ENVIRONMENT
========================================= */

dotenv.config();


/* =========================================
   APP
========================================= */

const app = express();


/* =========================================
   MIDDLEWARE
========================================= */

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "DELETE"],
        allowedHeaders: ["Content-Type"]
    })
);

app.use(
    express.json()
);


/* =========================================
   ROOT
========================================= */

app.get("/", (req, res) => {

    res.json({
        success: true,
        message:
            "Global Movie Search API is running."
    });

});


/* =========================================
   ROUTES
========================================= */

app.use(
    "/api/movies",
    movieRoutes
);

app.use(
    "/api/history",
    historyRoutes
);


/* =========================================
   ERROR HANDLER
========================================= */

app.use(
    (err, req, res, next) => {

        console.error(
            "Server Error:",
            err
        );

        res.status(500).json({
            message:
                "Internal server error."
        });

    }
);


/* =========================================
   START SERVER
========================================= */

const PORT =
    process.env.PORT || 5000;


const startServer = async () => {

    try {

        await connectDB();

        app.listen(
            PORT,
            () => {

                console.log(
                    `Server running on http://localhost:${PORT}`
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