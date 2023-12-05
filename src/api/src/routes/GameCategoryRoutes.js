import express from "express";

import { GameCategoryController } from "../controllers/GameCategoryController.js";

const GameCategoryRouter = express.Router();

GameCategoryRouter.get(
  "/game-category",
  GameCategoryController.listGamesCategories
);

GameCategoryRouter.post(
  "/game-category/create",
  GameCategoryController.createGameCategory
);

GameCategoryRouter.put(
  "/game-category/update/:id",
  GameCategoryController.updateGameCategory
);

GameCategoryRouter.delete(
  "/game-category/delete/:id",
  GameCategoryController.deleteGameCategory
);

GameCategoryRouter.get(
  "/game-category/:id",
  GameCategoryController.findGameCategory
);

export default GameCategoryRouter;
