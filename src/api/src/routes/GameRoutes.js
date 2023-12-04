import express from "express";

import { GameController } from "../controllers/GameController.js";

const GameRouter = express.Router();

GameRouter.get("/game", GameController.listGames);

GameRouter.post("/game/create", GameController.createGame);

GameRouter.put("/game/update/:id", GameController.updateGame);

GameRouter.delete("/game/delete/:id", GameController.deleteGame);

GameRouter.get("/game/:id", GameController.findGame);

export default GameRouter;
