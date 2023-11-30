import { handleDatabaseConnection } from "../functions/handleDatabaseConnection.js";
import { handleDatabaseQuery } from "../functions/handleDatabaseQuery.js";

import { database } from "./config.js";
import { execSeeds } from "./seed.js";
import { createTables } from "./tables.js";

export function initDatabase() {
  database.connect(handleDatabaseConnection);

  // create database
  database.query(
    "CREATE DATABASE IF NOT EXISTS `sotero_db`",
    handleDatabaseQuery
  );

  createTables(database);

  execSeeds(database);
}
