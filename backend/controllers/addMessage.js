import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    from_user_id: Joi.string().guid().required(),
    to_user_id: Joi.string().guid().required(),
    message: Joi.string().min(5).required(),
    audio_id: Joi.string().guid().allow("").required(),
    audio_txt: Joi.string().allow("").required(),
  })
  .required();

const addMessage = async (request, response) => {
  const props = await helpers.validate(request.body, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const {
    from_user_id,
    to_user_id,
    message,
    audio_id,
    audio_txt,
  } = request.body;

  pool.query(
    `INSERT INTO user_message (from_user_id, to_user_id, message, audio_id, audio_txt ) VALUES($1,$2,$3,$4,$5 );`,
    [from_user_id, to_user_id, message, audio_id, audio_txt],
    (error, results) => {
      if (error) {
        return response.status(500).json({ message: "Ошибка." });
      }

      return response.status(200).json({ message: "Сообщение добавлено." });
    }
  );
};
export default addMessage;
