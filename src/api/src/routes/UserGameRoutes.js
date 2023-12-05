import express from "express";

import { UserGameController } from "../controllers/UserGameController.js";

const UserGameRouter = express.Router();

UserGameRouter.get("/user-game", UserGameController.listUserGames);

UserGameRouter.post("/user-game/create", UserGameController.createUserGame);

UserGameRouter.put("/user-game/update/:id", UserGameController.updateUserGame);

UserGameRouter.delete(
  "/user-game/delete/:id",
  UserGameController.deleteUserGame
);

UserGameRouter.get("/user-game/:id", UserGameController.findUserGame);

export default UserGameRouter;
