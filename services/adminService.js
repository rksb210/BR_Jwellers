
import pool from "../db/connect.js";

const adminService = {
  category: async (body) => {
    const { category} = body;
    try {
      // Insert the new user
      const insertUserQuery = `
        INSERT INTO Category (category)
        VALUES (?);
      `;
      await pool.query(insertUserQuery, [category]);

      return { msg: "Category Created Successfully" };
    } catch (error) {
      console.error("Error in user creation:", error.message);
      throw error;
    }
  },

  getCategory: async () => {
    try {
      // Query to fetch all categories
      const fetchCategoriesQuery = `
        SELECT * FROM Category;
      `;
      const [categories] = await pool.query(fetchCategoriesQuery);
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw new Error("Failed to fetch categories. Please try again later.");
    }
  },

  product: async (body) => {
    const { category,productName,productDescription} = body;
    try {
      // Insert the new user
      const insertUserQuery = `
        INSERT INTO Product (category,productName,productDescription)
        VALUES (?,?,?);
      `;
      await pool.query(insertUserQuery, [category,productName,productDescription]);

      return { msg: "Product Created Successfully" };
    } catch (error) {
      console.error("Error in user creation:", error.message);
      throw error;
    }
  },
  
};

export default adminService;
