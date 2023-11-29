import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const handleDatabaseConnection = (error) => {
  if (error) throw error;
  console.log("MySQL connected...");
};

const handleDatabaseCreation = (error) => {
  if (error) throw error;
};

export const database = mysql.createConnection(DB_CONFIG);

export function initDatabase() {
  database.connect(handleDatabaseConnection);

  // create database
  database.query(
    "CREATE DATABASE IF NOT EXISTS `sotero_db`",
    handleDatabaseCreation
  );

  // seeding database
  database.query(
    `
    USE sotero_db;

    CREATE TABLE IF NOT EXISTS user (
        id varchar(40) PRIMARY KEY NOT NUll,
        first_name varchar(60) NOT NULL,
        last_name varchar(60) NOT NULL,
        user_name varchar(60) NOT NULL,
        email varchar(60) NOT NULL,
        has_accepted_use_terms varchar(60) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS game (
        id varchar(40) PRIMARY KEY NOT NUll,
        name varchar(60) NOT NULL,
        release_date varchar(60) NOT NULL,
        abstract varchar(120) NOT NULL,
        developer varchar(60) NOT NULL,
        publisher varchar(60) NOT NULL
    );
  `,
    (error, result) => {
      if (error) throw error;
      console.log(result);
    }
  );
}
