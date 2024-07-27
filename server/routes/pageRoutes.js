import express from "express";
import { savePage, getPage } from "../controllers/pageController.js";

const router = express.Router();

router.post("/save", savePage);
router.get("/:pageId", getPage);

export default router;
