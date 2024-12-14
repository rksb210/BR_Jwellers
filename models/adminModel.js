import pool from "../db/connect.js";

// Initialize the Users table
const adminModel = async () => {
  const categoryTable = `
    CREATE TABLE IF NOT EXISTS Category (
      category_id INT AUTO_INCREMENT PRIMARY KEY,
      category VARCHAR(255) NOT NULL UNIQUE
    );
  `;
  try {
    await pool.query(categoryTable);
    console.log("Category table created successfully!");
  } catch (error) {
    console.error("Error creating Category table:", error.message);
  }
};

export default adminModel;
