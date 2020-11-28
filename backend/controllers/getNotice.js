import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    user_id: Joi.string().guid().required(),
  })
  .required();

const getNotice = async (request, response) => {
  const props = await helpers.validate(request.query, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { user_id } = request.query;

  pool.query(
    "SELECT * FROM notice WHERE user_id = $1",
    [user_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length > 0) {
        return response
          .status(200)
          .json({ notice_count: results.rows.length, notice: results.rows });
      }
      return response.status(200).json({ notice_count: 0, notice: 0 });
    }
  );
};
export default getNotice;
