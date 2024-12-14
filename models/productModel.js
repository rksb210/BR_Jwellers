import pool from "../db/connect.js";

// Initialize the Users table
const productModel = async () => {
  const productTable = `
    CREATE TABLE IF NOT EXISTS Product (
      product_id INT AUTO_INCREMENT PRIMARY KEY,
      category VARCHAR(255) NOT NULL UNIQUE,
      productName VARCHAR(255) NOT NULL UNIQUE,
      productDescription VARCHAR(255) NOT NULL UNIQUE
    );
  `;
  try {
    await pool.query(productTable);
    console.log("Category table created successfully!");
  } catch (error) {
    console.error("Error creating Category table:", error.message);
  }
};

export default productModel;
