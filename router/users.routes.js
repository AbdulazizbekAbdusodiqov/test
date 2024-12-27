import express from "express";
import path from "path";
export const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    try {
        return res.sendFile(path.join(process.cwd() + "views", "index.html"));

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
});