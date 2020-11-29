let audio_manager = (function () {
  let audio_manager = {
    mode: "with_text",
    init() {
      this.audio_app = new Audio_app(document.getElementById("audio_with_txt"));
    },
    start_rec_with_text(e) {
      let th = $(e.currentTarget);
      audio_manager.mode = th.attr("mode");

      this.start_rec.call(this, e);
    },
    start_rec(e) {
      let th = $(e.currentTarget);
      audio_manager.mode = th.attr("mode");

      if (audio_manager.audio_app.stop) {
        audio_manager.audio_app.stop = false;
        audio_manager.audio_app._stopAllRecording();
        $(th).removeClass("active");
        th.removeClass("record");
      } else {
        audio_manager.audio_app.stop = true;
        audio_manager.audio_app._stopAllRecording();
        audio_manager.audio_app.saveNextRecording = true;
        audio_manager.audio_app._startRecording();
        $(th).addClass("active");
        th.addClass("record");
        if (audio_manager.mode == "audio_control") {
          setTimeout((_) => {
            audio_manager.start_rec({ currentTarget: $("#audio_control") });
          }, 5000);
        }
      }
    },
    parse_audio_data(data) {
      console.log("data=", JSON.parse(data));
      if (this.mode == "width_text") {
        this.parse_audio_with_text.call(this, JSON.parse(data));
      }
      if (this.mode == "audio_control") {
        this.audio_control.call(this, JSON.parse(data));
      }
    },
    parse_audio_with_text(data) {
      let res = [];
      let str = "";
      let audio_arr = store.get("audio_arr") || [];
      let date = new Date();
      res.push(data.r[0].response[0].text);
      res.push(data.r[0].response_audio_url);
      audio_arr.push(res[1]);
      store.set({ audio_arr: audio_arr });

      str += `
            <div class="message" audio translate>
                <div class="message-avatar">
                    <img src="./img/chatIco.png">
                </div>
                <div class="message-content">
                    <div class="message-header">
                        <div class="message-name">Абрамов</div>
                        <div class="message-time">${
                          date.getHours() + ":" + date.getMinutes()
                        }</div>
                    </div>
                    <div class="message-audio">
                        <div class="message-audioPlayBtn" audio_id = '${
                          res[1]
                        }'>
                            <img src="./img/play_bl.svg" width="14px" height="14px" >
                        </div>
                        <div class="message-audioDiogramm">
                            <div class="cutAudioWrapper">
                                <img src="./img/Seekbar.png">
                                <img src="./img/Seekbar.png">
                                <img src="./img/Seekbar.png">
                            </div>
                        </div>
                        <div class="message-audioTranslate">
                            <img src="./img/translateAudio.png">
                        </div>
                    </div>
                    <div class="message-audioTranslateBlock">
                        <div class="message-audioTranslateText">
                            ${res[0]}
                        </div>
                        <div class="message-audioTranslateCloseBtn">
                            <img src="./img/chatClose.png" width="13px" height="13px">
                        </div>
                    </div>
                    <div class="message-plainTextbBlock">
                        <div class="message-plainTextbBlockText">
                        </div>
                        <div class="message-plainTextbBlockSeenIco">
                            <img src="./img/eye.png">
                        </div>
                    </div>
                </div>
            </div>
            `;
      $("#chat_content").append(str);
      _chat.open_chat();
      console.log("parse_audio_with_text res=", res);
      return res;
    },
    play_audio(e) {
      let th = $(e.currentTarget);
      let audio_url = th.attr("audio_id");
      let audio = new Audio("http://213.189.217.212:8888" + audio_url);
      audio.play();
    },
    audio_control(data) {
      let res = "";
      let commands = [
        {
          txt: "контакты",
          command: tab_contacts.show_users_tab.bind(tab_contacts),
        },
        {
          txt: "список",
          command: tab_contacts.show_users_tab.bind(tab_contacts),
        },
        {
          txt: "сотрудников",
          command: tab_contacts.show_users_tab.bind(tab_contacts),
        },
        {
          txt: "задачи",
          command: tab_tasks.show_tasks_tab.bind(tab_tasks),
        },
        {
          txt: "задачу",
          command: tab_tasks.show_tasks_tab.bind(tab_tasks),
        },
        {
          txt: "чат",
          command: _chat.open_chat.bind(_chat),
        },
        {
          txt: "час",
          command: _chat.open_chat.bind(_chat),
        },
      ];
      let txt = data.r[0].response[0].text;
      commands.forEach((_) => {
        if (txt.indexOf(_.txt) > -1) _.command();
      });
    },
  };

  return audio_manager;
})();
