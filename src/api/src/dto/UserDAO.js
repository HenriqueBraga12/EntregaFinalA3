import { v4 as uuidv4 } from "uuid";

import { db } from "../database/config.js";

export class UserDAO {
  create(user) {
    const sql = `
			INSERT INTO users (id, first_name, last_name, username, email, password, has_accepted_use_terms) VALUES ("${uuidv4()}", "${
      user.first_name
    }", "${user.last_name}", "${user.username}", "${user.email}", "${
      user.password
    }", "${user.has_accepted_use_terms}")
		`;

    db.run(sql);
  }

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", [], (error, users) => {
        if (error || users == undefined) {
          reject(new Error("Users not found."));
        } else {
          resolve(users);
        }
      });
    });
  }
}
