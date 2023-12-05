import express from "express";

import { UserGameCategoryController } from "../controllers/UserGameCategoryController.js";

const UserGameCategoryRouter = express.Router();

UserGameCategoryRouter.get(
  "/user-game-category",
  UserGameCategoryController.listUserGamesCategories
);

UserGameCategoryRouter.post(
  "/user-game-category/create",
  UserGameCategoryController.createUserGameCategory
);

UserGameCategoryRouter.put(
  "/user-game-category/update/:id",
  UserGameCategoryController.updateUserGameCategory
);

UserGameCategoryRouter.delete(
  "/user-game-category/delete/:id",
  UserGameCategoryController.deleteUserGameCategory
);

UserGameCategoryRouter.get(
  "/user-game-category/:id",
  UserGameCategoryController.findUserGameCategory
);

export default UserGameCategoryRouter;
