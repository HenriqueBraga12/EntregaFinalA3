import { handleDatabaseQuery } from "../functions/handleDatabaseQuery.js";

export const execSeeds = (database) => {
  database.query(
    `
		INSERT INTO sotero_db.users (id, first_name, last_name, user_name, email, password, has_accepted_use_terms) VALUES 
			("2f2faace-2507-4eaa-bcbe-89892307be30", "Matheus", "Santos", "matheusdoe", "matheusdoe@sotero.com", "sotero@123", TRUE);
	`,
    handleDatabaseQuery
  );
};
