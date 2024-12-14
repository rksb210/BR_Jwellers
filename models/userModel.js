import pool from "../db/connect.js";

// Initialize the Users table
const UserModel = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("Users table created successfully!");
  } catch (error) {
    console.error("Error creating Users table:", error.message);
  }
};

export default UserModel;
