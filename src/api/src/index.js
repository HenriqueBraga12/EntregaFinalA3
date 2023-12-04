import express from "express";
import cors from "cors";

import UserRouter from "./routes/UserRoutes.js";
import GameRouter from "./routes/GameRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use(UserRouter);
app.use(GameRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
