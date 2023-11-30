import { v4 as uuidv4 } from "uuid";

import { handleDatabaseQuery } from "../functions/handleDatabaseQuery.js";

export const execSeeds = (database) => {
  database.query(
    `
		INSERT INTO sotero_db.users (id, first_name, last_name, user_name, email, password, has_accepted_use_terms) VALUES 
			("2f2faace-2507-4eaa-bcbe-89892307be30", "Matheus", "Santos", "matheusdoe", "matheusdoe@sotero.com", "sotero@123", TRUE), ("ecfd772b-212e-45ba-a5d1-be56a453ec22", "Jailson", NULL, "jailson", "jailson@sotero.com", "sotero@123", TRUE), ("8001e514-7ceb-4661-8cbc-68a22b523cbe", "Henrique", NULL, "henrique", "henrique@sotero.com", "sotero@123", TRUE), ("6cc9657d-ece8-4198-b2bd-8c4625eb9330", "Isac", NULL, "isac", "isac@sotero.com", "sotero@123", TRUE), ("054047ce-8b25-4b88-a873-eaa9e5672883", "Arthur", NULL, "arthur", "arthur@sotero.com", "sotero@123", TRUE), ("d966a661-7912-48a2-adc7-3d8292ef9183", "Fernando", NULL, "fernando", "fernando@sotero.com", "sotero@123", TRUE), ("705845bf-22b8-4cde-b6d1-6ee9838987ea", "Lucas", NULL, "lucas", "lucas@sotero.com", "sotero@123", TRUE), ("973343d5-afbd-4d55-9456-5f76306a13bd", "Marcos", NULL, "marcos", "marcos@sotero.com", "sotero@123", TRUE), ("a5afdf85-356f-4598-bb66-577300037292", "Mauricio", NULL, "mauricio", "mauricio@sotero.com", "sotero@123", TRUE), ("4a685abc-71ac-4bd4-af50-5ae47a159a61", "Gustavo", NULL, "gustavo", "gustavo@sotero.com", "sotero@123", TRUE);
	`,
    handleDatabaseQuery
  );

  database.query(
    `
		INSERT INTO sotero_db.games_categories (id, name) VALUES 
			("6004fa08-a779-4b3a-b308-538640bd1301", "Já joguei"), ("cb6563e1-e648-4281-9cb4-4bba4555b80a", "Jogando"), ("4f619e79-ccc2-44c3-81c2-d386c1122288", "Já zerei"), ("62785c52-c1ce-43d4-98ef-06339356ee50", "Não recomendo"), ("dc639c49-e301-406e-bed2-23d896b2f07b", "Penso em jogar"), ("30911665-2657-4a8f-b280-06a84ec06d73", "Quero comprar"), ("5f11951b-989b-4bac-ac2f-15d40962f43c", "Platinei"), 
      ("ea2b5ff0-c342-466d-9e7b-54a477a500a1", "Floopei"), 
      ("061a6eda-984b-43a1-855f-6765af6b20c3 ", "Decepção"), ("aba4773c-61fb-44e2-a110-905aa314b814", "Sonho em jogar");
	`,
    handleDatabaseQuery
  );

  database.query(
    `
		INSERT INTO sotero_db.games_platforms (id, name) VALUES 
			("de92a24f-f2dd-4601-b6ec-dc99806020af", "Steam"), ("d1b55f0d-bca0-410a-a7d9-3a6ae9ab2af8", "Epic Games"), ("61587f06-92bf-4ac3-8903-7d4d9322a482", "Blizzard.net"), ("0d253925-2fa0-4190-abba-fc42795b40c1", "GOG"), ("a52dbb5d-87ee-4751-bfd3-fd6086e0098c", "PSN"), ("ea761c19-e959-4475-baf0-de5072871dfd", "Xbox"), ("7fda470b-ffdd-4b05-81f4-e23a932358c2", "Origin"), 
      ("2a8205c2-26bf-469e-bef1-0db0f7e611d1", "Ubisoft"), 
      ("a6f3a431-e816-456c-aabe-14975244d5fc", "PS2"), ("30be723d-1f0a-42fa-bdf4-ef39eae76b7b", "Nintendo");
	`,
    handleDatabaseQuery
  );

  database.query(
    `
		INSERT INTO sotero_db.games_platforms (id, name) VALUES 
			("de92a24f-f2dd-4601-b6ec-dc99806020af", "Steam"), ("d1b55f0d-bca0-410a-a7d9-3a6ae9ab2af8", "Epic Games"), ("61587f06-92bf-4ac3-8903-7d4d9322a482", "Blizzard.net"), ("0d253925-2fa0-4190-abba-fc42795b40c1", "GOG"), ("a52dbb5d-87ee-4751-bfd3-fd6086e0098c", "PSN"), ("ea761c19-e959-4475-baf0-de5072871dfd", "Xbox"), ("7fda470b-ffdd-4b05-81f4-e23a932358c2", "Origin"), 
      ("2a8205c2-26bf-469e-bef1-0db0f7e611d1", "Ubisoft"), 
      ("a6f3a431-e816-456c-aabe-14975244d5fc", "PS2"), ("30be723d-1f0a-42fa-bdf4-ef39eae76b7b", "Nintendo");
	`,
    handleDatabaseQuery
  );

  database.query(
    `
		INSERT INTO sotero_db.games_platforms (id, name) VALUES 
			("de92a24f-f2dd-4601-b6ec-dc99806020af", "Steam"), ("d1b55f0d-bca0-410a-a7d9-3a6ae9ab2af8", "Epic Games"), ("61587f06-92bf-4ac3-8903-7d4d9322a482", "Blizzard.net"), ("0d253925-2fa0-4190-abba-fc42795b40c1", "GOG"), ("a52dbb5d-87ee-4751-bfd3-fd6086e0098c", "PSN"), ("ea761c19-e959-4475-baf0-de5072871dfd", "Xbox"), ("7fda470b-ffdd-4b05-81f4-e23a932358c2", "Origin"), 
      ("2a8205c2-26bf-469e-bef1-0db0f7e611d1", "Ubisoft"), 
      ("a6f3a431-e816-456c-aabe-14975244d5fc", "PS2"), ("30be723d-1f0a-42fa-bdf4-ef39eae76b7b", "Nintendo");
	`,
    handleDatabaseQuery
  );
};
