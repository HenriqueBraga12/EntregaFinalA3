import express from "express";

import { UserController } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/user", UserController.listUsers);

UserRouter.post("/user/create", UserController.createUser);

UserRouter.put("/user/update/:id", UserController.updateUser);

UserRouter.delete("/user/delete/:id", UserController.deleteUser);

UserRouter.get("/user/:id", UserController.findUser);

export default UserRouter;
