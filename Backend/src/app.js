import express from "express";
import summaryRoute from "./route/summary.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/summary", summaryRoute);

export default app;
