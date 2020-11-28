import pool from "../config.js";

const departmentsList = async (request, response) => {
  pool.query("SELECT * FROM department", (error, results) => {
    if (error) {
      throw error;
    }
    return response.status(200).json(results.rows);
  });
};
export default departmentsList;
