import connectDB from "./db/index.js";
import app from "./app.js";
import { config } from "dotenv";

config();
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on port http://localhost:${process.env.PORT}`
    );
  });
});
