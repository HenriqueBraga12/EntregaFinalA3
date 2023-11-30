import { handleDatabaseConnection } from "../functions/handleDatabaseConnection.js";

import { database } from "./config.js";
import { execSeeds } from "./seed.js";
import { createTables } from "./tables.js";

function initDatabase() {
  database.connect(handleDatabaseConnection);

  createTables(database);

  execSeeds(database);
}

initDatabase();
