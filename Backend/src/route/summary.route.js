import { Router } from "express";
import {
  test,
  generateSummary,
  getSummary,
  removeSummary,
} from "../controller/summary.controller.js";

const router = Router();

router.post("/generate", generateSummary);
router.get("/get", getSummary);
router.get("/test", test);
router.delete("/remove", removeSummary);

export default router;
