import express from "express";
import cors from "cors";

import { initDatabase } from "./database/config.js";

const PORT = process.env.PORT || 3000;
const app = express();

initDatabase();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
