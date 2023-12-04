import express from "express";

import { GamePlatformController } from "../controllers/GamePlatformController.js";

const GamePlatformRouter = express.Router();

GamePlatformRouter.get(
  "/game-platform",
  GamePlatformController.listGamesPlatforms
);

GamePlatformRouter.post(
  "/game-platform/create",
  GamePlatformController.createGamePlatform
);

GamePlatformRouter.put(
  "/game-platform/update/:id",
  GamePlatformController.updateGamePlatform
);

GamePlatformRouter.delete(
  "/game-platform/delete/:id",
  GamePlatformController.deleteGamePlatform
);

GamePlatformRouter.get(
  "/game-platform/:id",
  GamePlatformController.findGamePlatform
);

export default GamePlatformRouter;
