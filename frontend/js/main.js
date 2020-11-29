let main = (function () {
  let main = {
    start_app(user) {
      v_peer.init(user.user_id);
      this.get_users();
      this.get_tasks();
    },
    get_users() {
      loader.send(
        "https://voiceapiserver.na4u.ru/api/users",
        "GET",
        this.parse_users.bind(this),
        console.log
      );
    },
    get_tasks() {
      loader.send(
        "https://voiceapiserver.na4u.ru/api/tasks",
        "GET",
        this.parse_tasks.bind(this),
        console.log
      );
    },
    parse_users(data) {
      store.set({ users: data });
    },
    parse_tasks(data) {
      store.set({ tasks: data });
    },
  };

  auth.auto_auth();
  audio_manager.init();
  return main;
})();
