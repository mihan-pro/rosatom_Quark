import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    from_user_id: Joi.string().guid().required(),
    to_user_id: Joi.string().guid().required(),
    time: Joi.date().required(),
  })
  .required();

const userMessages = async (request, response) => {
  const props = await helpers.validate(request.query, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { from_user_id, to_user_id, time } = request.query;

  const timing = time ? `and post_time > '${time}'` : "";

  pool.query(
    `SELECT * FROM user_message WHERE from_user_id = $1 and to_user_id = $2 ${timing}`,
    [from_user_id, to_user_id],
    (error, results) => {
      if (error) {
        return response.status(200).json({ message: "Сообщений нет." });
      }

      if (results.rows[0]) {
        return response.status(200).json({ data: results.rows });
      }
      return response
        .status(200)
        .json({ message: "Ошибка получения сообщений." });
    }
  );
};
export default userMessages;
