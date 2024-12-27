import express from "express";
import { config } from "dotenv";
import { mainRouter } from "./router/users.routes.js";

config()

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.static("views"));

app.use("/", mainRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
