import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class UserDAO {
  static create(user) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (id, first_name, last_name, username, email, password, has_accepted_use_terms) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          uuidv4(),
          user.first_name,
          user.last_name,
          user.username,
          user.email,
          user.password,
          user.has_accepted_use_terms,
        ],
        (error) => {
          if (error) {
            console.error(error);
            reject(new Error("Error on user creation."));
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(userId, user) {
    return new Promise((resolve, reject) => {
      if (userId == undefined || typeof userId !== "string") {
        reject(new Error("Invalid user id."));
      }

      let setSQL = "";

      const userProperties = Object.entries(user);

      if (!userProperties.length) {
        reject(
          new Error(
            "The body should have at least one property to update the user."
          )
        );
        return;
      }

      userProperties.map(([key, value], index) => {
        if (value) {
          setSQL = setSQL.concat(`${key} = "${value}"`);

          if (
            userProperties.length > 1 &&
            index !== userProperties.length - 1
          ) {
            setSQL = setSQL.concat(", ");
          }
        }
      });

      db.run(`UPDATE users SET ${setSQL} WHERE id = ?`, [userId], (error) => {
        if (error) {
          console.error(error);
          reject(new Error("Error on user creation."));
        } else {
          resolve();
        }
      });
    });
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", [], (error, users) => {
        if (error) {
          console.error(error);
          reject(new Error("Users not found."));
        } else {
          resolve(users);
        }
      });
    });
  }

  static findById(userId) {
    return new Promise((resolve, reject) => {
      if (userId == undefined || typeof userId !== "string") {
        reject(new Error("Invalid user id."));
      }

      db.get("SELECT * FROM users WHERE id = ?", [userId], (error, result) => {
        if (error) {
          console.error(error);
          reject(new Error("User not found"));
        } else {
          resolve(result);
        }
      });
    });
  }

  static deleteById(userId) {
    return new Promise((resolve, reject) => {
      if (userId == undefined || typeof userId !== "string") {
        reject(new Error("Invalid user id."));
      }

      db.run("DELETE FROM users WHERE id = ?", [userId], (error, result) => {
        if (error) {
          console.error(error);
          reject(new Error("User not found"));
        } else {
          resolve();
        }
      });
    });
  }
}
