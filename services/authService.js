import BadRequestError from "../errors/badRequest.js";
import bcrypt from "bcryptjs";
import pool from "../db/connect.js";

const authService = {
  users: async (body) => {
    const { email, password } = body;

    try {
      // Check if the user already exists
      const checkUserQuery = `SELECT * FROM Users WHERE email = ?;`;
      const [existingUser] = await pool.query(checkUserQuery, [email]);

      if (existingUser.length > 0) {
        throw new BadRequestError("User already exists");
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user
      const insertUserQuery = `
        INSERT INTO Users ( email, password)
        VALUES (?, ?);
      `;
      await pool.query(insertUserQuery, [email, hashedPassword]);

      return { msg: "User Created Successfully" };
    } catch (error) {
      console.error("Error in user creation:", error.message);
      throw error;
    }
  },
  login: async (body) => {
    const { email, password } = body;

    try {
      // Check if the user exists
      const getUserQuery = `SELECT * FROM Users WHERE email = ?;`;
      const [userResult] = await pool.query(getUserQuery, [email]);

      if (userResult.length === 0) {
        throw new UnauthorizedError("Invalid email or password");
      }

      const user = userResult[0];

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedError("Invalid email or password");
      }

      // Generate token or any other login-specific response
      return { msg: "Login successful", userId: user.id };
    } catch (error) {
      console.error("Error during login:", error.message);
      throw error;
    }
  },

  getCustomer: async () => {
    try {
      // Query to fetch all categories
      const fetchUsersQuery = `
        SELECT * FROM Users;
      `;
      const [customers] = await pool.query(fetchUsersQuery);
      return customers;
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw new Error("Failed to fetch categories. Please try again later.");
    }
  },
};

export default authService;
