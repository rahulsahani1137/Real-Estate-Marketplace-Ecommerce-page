import express from "express";
import * as auth from "../controllers/auth.js";

const router = express.Router();

//get post put delete
router.get("/", auth.welcome);

export default router;