import pool from "../config.js";
import helpers from "../helpers/helpers.js";

const getTasks = async (request, response) => {
  pool.query(
    `SELECT * FROM  task LEFT JOIN attatchment ON attatchment.attatchment_id = task.attatchment `,
    (error, results) => {
      if (error) {
        response.status(500).json({ message: "Ошибка получения заданий" });
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
          task_id: item.task_id,
          task_title: item.task_title,
          task_description: item.task_description,
          priority: item.priority,
          status: item.status,
          tags: item.tags,
          start_at: helpers.showDate(item.start_at),
          end_at: helpers.showDate(item.end_at),
          rdy_at: item.rdy_at,
          assign_at: item.assign_at,
          resolution: item.resolution,
          contributor: item.contributor,
          description: item.description,
          audio,
          video,
          img,
          doc,
        };

        return message;
      });

      response.status(200).json(data);
    }
  );
};
export default getTasks;
