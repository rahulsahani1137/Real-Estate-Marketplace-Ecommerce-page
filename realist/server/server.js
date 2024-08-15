import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";

const app = express();

//db
mongoose
    .connect(DATABASE)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        data: "hello from rahul servers api"
    });
});

app.listen(8000, () => {
    console.log("server is running on port 8000");
});