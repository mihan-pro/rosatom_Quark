let utils = (function () {
  let utils = {
    url_params_parser(url) {
      let res = {};
      url
        .split("?")[1]
        .split("&")
        .forEach((_) => {
          res[_.split("=")[0]] = _.split("=")[1];
        });

      return res;
    },
    wrap(f) {
      return function () {
        f(this);
      };
    },
    open_popup(str) {
      $("#gray_land_scape").html(str);
      $("#gray_land_scape").removeClass("d-none");
    },
    close_popup() {
      $("#gray_land_scape").html("");
      $("#gray_land_scape").addClass("d-none");
    },
    find_user(id, users) {
      let res = "";
      users.forEach((_) => {
        if (id == _.user_id) res = _;
      });
      return res;
    },
    find_task(id, tasks) {
      let res = "";
      tasks.forEach((_) => {
        if (id == _.task_id) res = _;
      });
      return res;
    },
  };

  return utils;
})();
