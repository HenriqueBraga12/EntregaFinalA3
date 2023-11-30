import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const database = mysql.createConnection(DB_CONFIG);
