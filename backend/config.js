import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DBUSER || "developer",
  host: process.env.DBHOST || "localhost",
  database: process.env.DB || "app",
  password: process.env.DBPASS || "developer",
  port: 5432,
});
export default pool;
