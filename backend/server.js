import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Global Movie Search API is running."
    });
});

app.use("/api/movies", movieRoutes);
app.use("/api/history", historyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});