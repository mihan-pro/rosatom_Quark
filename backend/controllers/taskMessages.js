import pool from "../config.js";
import Joi from "joi";
import helpers from "../helpers/helpers.js";

const schema = Joi.object()
  .keys({
    task_id: Joi.string().guid().required(),
  })
  .required();

const taskMessages = async (request, response) => {
  const props = await helpers.validate(request.body, schema);
  if (props) {
    return response.status(400).json(props);
  }
  const { task_id } = request.query;

  pool.query(
    `SELECT * FROM message LEFT JOIN attatchment ON attatchment.attatchment_id = message.attatchment where message.task_id = $1`,
    [task_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      const data = results.rows.map((item) => {
        let audio, video, doc, img;
        switch (item.attatchment_type) {
          case "audio":
            audio = {
              url: item.url,
              translane: item.translane,
              alt: item.alt,
            };
            break;
          case "video":
            video = {
              url: item.url,
              translane: item.translane,
              alt: item.alt,
            };
            break;
          case "img":
            img = {
              url: item.url,
              translane: item.translane,
              alt: item.alt,
            };
            break;
          case "doc":
            doc = {
              url: item.url,
              translane: item.translane,
              alt: item.alt,
            };
            break;
        }
        const message = {
          user_id: item.user_id,
          message: item.message,
          audio,
          video,
          img,
          doc,
        };

        return message;
      });

      if (results.rows.length > 0) {
        return response.status(200).json({ data });
      }
      return response.status(200).json({ error: "Сообщений пока нет" });
    }
  );
};
export default taskMessages;
