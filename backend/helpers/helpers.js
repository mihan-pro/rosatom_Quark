const validate = async (data, schema) => {
  const validation = schema.validate(data);
  return validation.error ? validation.error : false;
};

//29 ноя 2020 / 17:00
const showDate = (time) => {
  const months = new Array();
  months[0] = "Янв";
  months[1] = "Фев";
  months[2] = "Мар";
  months[3] = "Апр";
  months[4] = "Май";
  months[5] = "Июн";
  months[6] = "Июл";
  months[7] = "Авг";
  months[8] = "Сен";
  months[9] = "Окт";
  months[10] = "Ноя";
  months[11] = "Дек";
  const month = months[new Date(time).getMonth()];

  const dateArr = new Date(time).toString().split(" ");

  return `${dateArr[2]} ${month} ${dateArr[3]} / ${dateArr[4].substr(0, 5)}`;
};

const helpers = {
  validate,
  showDate,
};
export default helpers;
