import { UserGameCategoryDAO } from "../dao/UserGameCategoryDAO.js";

export class UserGameCategoryController {
  static async createUserGameCategory(request, response) {
    try {
      const userGameCategory = request.body;

      await UserGameCategoryDAO.create(userGameCategory);

      return response.status(201).json({
        message: "User game category created succesfully.",
        userGameCategory,
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateUserGameCategory(request, response) {
    try {
      const userGameCategory = request.body;
      const userGameCategoryId = request.params.id;

      await UserGameCategoryDAO.update(userGameCategoryId, userGameCategory);

      return response.status(201).json({
        message: "User game category succesfully updated.",
        userGameCategory,
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listUserGamesCategories(request, response) {
    try {
      const userGamesCategories = await UserGameCategoryDAO.findAll();

      return response.json({ userGamesCategories });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
  7;

  static async findUserGameCategory(request, response) {
    try {
      const userGameCategoryId = request.params.id;
      const userGameCategory = await UserGameCategoryDAO.findById(
        userGameCategoryId
      );

      return response.json({ userGameCategory });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteUserGameCategory(request, response) {
    try {
      const userGameCategoryId = request.params.id;

      await UserGameCategoryDAO.deleteById(userGameCategoryId);

      return response.json({
        message: "User game category was succesfully deleted.",
      });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}