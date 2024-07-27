import express from "express";
import bodyParser from "body-parser";
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/pages", pageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
