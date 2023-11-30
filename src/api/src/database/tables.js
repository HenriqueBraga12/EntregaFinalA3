import { handleDatabaseQuery } from "../functions/handleDatabaseQuery.js";

export const createTables = (database) => {
  database.query(
    `
		  CREATE TABLE IF NOT EXISTS sotero_db.users (
			id varchar(40) PRIMARY KEY NOT NUll,
			first_name varchar(60) NOT NULL,
			last_name varchar(60),
			user_name varchar(60) NOT NULL,
			email varchar(60) NOT NULL,
			password varchar(60) NOT NULL,   
			has_accepted_use_terms varchar(60) NOT NULL
		  );
		`,
    handleDatabaseQuery
  );

  database.query(
    `
		  CREATE TABLE IF NOT EXISTS sotero_db.games_platforms (
			id varchar(40) PRIMARY KEY NOT NUll,
			name varchar(60) NOT NULL,
			iconURL varchar(255)
		  );
		`,
    handleDatabaseQuery
  );

  database.query(
    `
		  CREATE TABLE IF NOT EXISTS sotero_db.games (
			id varchar(40) PRIMARY KEY NOT NUll,
			name varchar(60) NOT NULL,
			game_platform_id varchar(60) NOT NULL REFERENCES sotero_db.games_flatforms(id),
			release_date varchar(255),
			abstract varchar(255),
			developer varchar(60),
			publisher varchar(60)
		  );
		`,
    handleDatabaseQuery
  );

  database.query(
    `
		  CREATE TABLE IF NOT EXISTS sotero_db.games_categories (
			id varchar(40) PRIMARY KEY NOT NUll,
			name varchar(60) NOT NULL
		  );
		`,
    handleDatabaseQuery
  );

  database.query(
    `
		  CREATE TABLE IF NOT EXISTS sotero_db.user_game (
			id varchar(40) PRIMARY KEY NOT NUll,
			user_id varchar(40) NOT NULL REFERENCES sotero_db.users(id),
			game_id varchar(40) NOT NULL REFERENCES sotero_db.games(id),
			grade float NOT NULL
		  );
		`,
    handleDatabaseQuery
  );

  database.query(
    `
		  CREATE TABLE IF NOT EXISTS sotero_db.user_game_categories (
			id varchar(40) PRIMARY KEY NOT NUll,
			game_category_id varchar(40) NOT NULL REFERENCES sotero_db.games_categories(id),
			user_game_id varchar(40) NOT NULL REFERENCES sotero_db.user_game(id),
			grade float NOT NULL
		  );
		`,
    handleDatabaseQuery
  );
};
