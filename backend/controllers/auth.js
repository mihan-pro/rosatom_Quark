import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    password: Joi.string().required(),
    nickname: Joi.string().required(),
  })
  .required();

const auth = async (request, response) => {
  const props = await helpers.validate(request.body, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { password, nickname } = request.body;

  pool.query(
    "SELECT user_id, fio, nickname, status, user_position, avatar_url FROM users WHERE nickname = $1 and user_password = $2 limit 1",
    [nickname, password],
    (error, results) => {
      if (error) {
        return response
          .status(400)
          .json({ message: "Нет такого пользователя." });
      }

      if (results.rows[0]) {
        return response.status(200).json(results.rows[0]);
      }
      return response.status(400).json({ message: "Нет такого пользователя." });
    }
  );
};
export default auth;
