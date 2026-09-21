import express from "express";

import SearchHistory from "../models/SearchHistory.js";

const router = express.Router();


/* =========================================
   GET HISTORY
   GET /api/history
========================================= */

router.get("/", async (req, res) => {

    try {

        const history =
            await SearchHistory
                .find()
                .sort({
                    createdAt: -1
                })
                .limit(15);

        const formattedHistory =
            history.map((item) => ({
                id: item._id.toString(),
                query: item.query,
                country: item.country,
                time: item.createdAt
            }));

        res.json({
            success: true,
            history: formattedHistory
        });

    } catch (error) {

        console.error(
            "Get History Error:",
            error
        );

        res.status(500).json({
            message:
                "Unable to load history."
        });

    }

});


/* =========================================
   DELETE ONE HISTORY ITEM
   DELETE /api/history/:id
========================================= */

router.delete("/:id", async (req, res) => {

    try {

        const deleted =
            await SearchHistory.findByIdAndDelete(
                req.params.id
            );

        if (!deleted) {

            return res.status(404).json({
                message:
                    "History item not found."
            });

        }

        res.json({
            success: true,
            message:
                "History item deleted."
        });

    } catch (error) {

        console.error(
            "Delete History Error:",
            error
        );

        res.status(500).json({
            message:
                "Unable to delete history."
        });

    }

});


/* =========================================
   CLEAR ALL HISTORY
   DELETE /api/history
========================================= */

router.delete("/", async (req, res) => {

    try {

        await SearchHistory.deleteMany({});

        res.json({
            success: true,
            message:
                "Search history cleared."
        });

    } catch (error) {

        console.error(
            "Clear History Error:",
            error
        );

        res.status(500).json({
            message:
                "Unable to clear history."
        });

    }

});


export default router;