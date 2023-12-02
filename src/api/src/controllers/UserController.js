import { UserDAO } from "../dto/UserDAO.js";

export class UserController {
  static createUser(request, response) {
    response.json({ message: "Hello World" });
  }

  static updateUser(request, response) {
    response.json({ message: "Hello World" });
  }

  static async listUsers(request, response) {
    try {
      const users = await UserDAO.findAll();

      return response.json({ users });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
  7;

  static findUser(request, response) {
    response.json({ message: "Hello World" });
  }

  static deleteUser(request, response) {
    response.json({ message: "Hello World" });
  }
}
