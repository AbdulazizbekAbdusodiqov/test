import express from "express";
import { config } from "dotenv";
config()

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use("/api", mainRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
