import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    task_id: Joi.string().guid().required(),
    time: Joi.number().required(),
  })
  .required();

const backupTask = async (request, response) => {
  const props = await helpers.validate(request.body, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { task_id, time } = request.body;

  pool.query(
    `INSERT INTO backuptask ( task_id, time_to) VALUES($1,now() + '${time} year');`,
    [task_id],
    (error, results) => {
      console.log("error :>> ", error);
      if (error) {
        return response
          .status(500)
          .json({ message: "Ошибка архивирования задачи." });
      }

      return response
        .status(200)
        .json({ message: "Задача добавлена в архив." });
    }
  );
};
export default backupTask;
