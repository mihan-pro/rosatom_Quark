import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    department_id: Joi.string().guid().required(),
  })
  .required();

const departmentDetails = async (request, response) => {
  const props = await helpers.validate(request.query, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { department_id } = request.query;

  pool.query(
    "SELECT department_name FROM department WHERE department_id = $1",
    [department_id],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows) {
        return response.status(400).json({
          department: 0,
          employers: 0,
        });
      }
      const department = results.rows[0].department_name;
      pool.query(
        `SELECT
   users.user_id,
users.fio,
users.nickname,
users.status,
users.user_position,
users.avatar_url
FROM
    department_employer_set
LEFT JOIN users ON users.user_id = department_employer_set.user_id where department_employer_set.department_id= $1`,
        [id],
        (error, results) => {
          if (error) {
            throw error;
          }
          return response.status(200).json({
            department,
            employers: results.rows,
          });
        }
      );
    }
  );
};
export default departmentDetails;
