// import config from "./config.js";
// import mysql from 'mysql2/promise'

// const { user, password, host, port,name } = config


// const pool = mysql.createPool({
//     host: host,
//     user: user,
//     password: password,
//     database: name,
//     waitForConnections: true,
//     connectionLimit: 10, 
//     queueLimit: 0
// });

// pool.getConnection()
//     .then((connection) => {
//         console.log("Database connected successfully!");
//         connection.release();
//     })
//     .catch((error) => {
//         console.error("Database connection failed:", error.message);
//     });



// export default pool;

import mysql from 'mysql2/promise';
import config from './config.js';

const { host, user, password, port, name } = config;

const createDatabase = async () => {
    try {
        // Connect without specifying the database
        const connection = await mysql.createConnection({ host, user, password, port });

        // Create the database if it does not exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${name}\`;`);
        console.log(`Database '${name}' created or already exists.`);
        
        connection.end();
    } catch (error) {
        console.error("Error creating database:", error.message);
        process.exit(1); // Exit the process if database creation fails
    }
};

await createDatabase(); // Ensure the database exists before creating the pool

// Create the pool connection with the database name
const pool = mysql.createPool({
    host,
    user,
    password,
    database: name, // Use the database name here
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;
