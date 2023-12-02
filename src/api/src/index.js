import express from "express";
import cors from "cors";

import UserRouter from "./routes/UserRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

// routes
app.use(UserRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
