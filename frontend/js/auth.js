let auth = (function () {
  let auth = {
    auto_auth() {
      let login = store.get("login");
      let password = store.get("password");

      $("#login").val(login);
      $("#password").val(password);

      this.on_submit_form();
    },
    on_submit_form(e) {
      if (e) e.preventDefault();
      let login = $("#login").val();
      let pass = $("#password").val();
      store.set({ login: login, password: pass }, 1);
      loader.send(
        "http://voiceapiserver.na4u.ru/api/auth",
        "POST",
        this.auth_resp_parse.bind(this),
        console.error,
        { nickname: login, password: pass }
      );
    },
    auth_resp_parse(data) {
      if (data.nickname) this.on_auth_ok(data);
      else console.log("Не верный логин или пароль");
    },
    on_auth_ok(data) {
      $("#auth_curtain").remove();
      let user = {
        avatar_url: data.avatar_url,
        fio: data.fio,
        nickname: data.nickname,
        status: data.status,
        user_id: data.user_id,
        user_position: data.user_position,
      };
      store.set({ user: user });
      main.start_app.call(main, user);
    },
  };

  return auth;
})();
