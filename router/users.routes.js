import express from "express";

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    try {
        return  res.send("Hello World!");
        
    } catch (error) {
        console.log(error);
        return  res.status(500).send(error.message);
    }
});