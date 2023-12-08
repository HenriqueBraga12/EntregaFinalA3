import { GameDAO } from "../dao/GameDAO.js";
import { UserGameDAO } from "../dao/UserGameDAO.js";

export class UserGameController {
  static async createUserGame(request, response) {
    try {
      const userGame = request.body;

      await UserGameDAO.create(userGame);

      return response
        .status(201)
        .json({ message: "User game created succesfully.", userGame });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async updateUserGame(request, response) {
    try {
      const userGame = request.body;
      const userGameId = request.params.id;

      await UserGameDAO.update(userGameId, userGame);

      return response
        .status(201)
        .json({ message: "User game succesfully updated.", userGame });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listAllUserGames(request, response) {
    try {
      const userGames = await UserGameDAO.findAll();

      return response.json({ userGames });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async listUserGames(request, response) {
    try {
      const userGames = await UserGameDAO.findByUserId(request.userId);

      let userGamesSerialized = [];

      if (userGames instanceof Array) {
        userGamesSerialized = userGames.map(async (userGame) => {
          const gameData = await GameDAO.findById(userGame.game_id);

          return {
            ...userGame,
            game: gameData,
          };
        });
      } else {
        const gameData = await GameDAO.findById(userGames.game_id);

        userGamesSerialized.push({
          ...userGames,
          game: gameData,
        });
      }

      return response.json({ userGames: userGamesSerialized });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async findUserGame(request, response) {
    try {
      const userGameId = request.params.id;
      const userGame = await UserGameDAO.findById(userGameId);

      return response.json({ userGame });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }

  static async deleteUserGame(request, response) {
    try {
      const userGameId = request.params.id;

      await UserGameDAO.deleteById(userGameId);

      return response.json({ message: "User game was succesfully deleted." });
    } catch (error) {
      return response.status(400).json({ message: error?.message });
    }
  }
}
