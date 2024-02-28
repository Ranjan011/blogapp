// userRoutes.js

import express from "express";
import { test } from "../controllers/userController.js";

const router = express.Router();

// GET request handler
router.get("/test", test);

export default router;
