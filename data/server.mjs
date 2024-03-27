import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import baseRoutes from "./routes/baseRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs";


dotenv.config();
const app = express();
mongoose.connect(process.env.VITE_MONGO_URI);
const PORT = process.env.VITE_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", baseRoutes)
app.use("/user", userRoutes)
app.use("/post", postRoutes)

app.listen(PORT, () => {
    console.log(`Listening....on ${PORT}`);
  })