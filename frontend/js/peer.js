let v_peer = (function () {
  let v_peer = {
    init(uid) {
      peer = new Peer(uid, {
        host: "voiceapiserver.na4u.ru",
        port: 80,
        path: "/voiceApi",
      });
      peer.on("open", v_peer.on_open);
      peer.on("connection", v_peer.on_connection.bind(v_peer));
      peer.on("disconnected", v_peer.on_disconnected);
      peer.on("close", v_peer.on_close);
      peer.on("error", v_peer.on_error);
      peer.on("call", v_peer.on_call);
      v_peer.peer = peer;
    },
    _call(e) {
      let peerId = $(e.currentTarget).attr("peer_id");
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then(function (mediaStream) {
          let video = document.getElementById("myVideo");
          let user = utils.find_user(peerId, store.get("users"));
          v_peer.open_call_popup(user);
          store.set({ colling_colling_user_iduser: peerId });
          v_peer.peercall = peer.call(peerId, mediaStream);
          v_peer.peercall.on("stream", function (stream) {
            //нам ответили, получим стрим
            setTimeout(function () {
              document.getElementById("remVideo").srcObject =
                v_peer.peercall.remoteStream;
              document.getElementById("remVideo").onloadedmetadata = function (
                e
              ) {
                document.getElementById("remVideo").play();
              };
            }, 1500);
          });
          //  v_peer.peercall.on('close', onCallClose);
          video.srcObject = mediaStream;
          video.onloadedmetadata = function (e) {
            //video.play();
          };
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
    },
    answer() {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then(function (mediaStream) {
          let video = document.getElementById("myVideo");
          v_peer.peercall.answer(mediaStream); // отвечаем на звонок и передаем свой медиапоток собеседнику
          video.srcObject = mediaStream; //помещаем собственный медиапоток в объект видео (чтоб видеть себя)
          document.getElementById("callinfo").innerHTML =
            "Звонок начат... <button onclick='callclose()' >Завершить звонок</button>"; //информируем, что звонок начат, и выводим кнопку Завершить
          video.onloadedmetadata = function (e) {
            //запускаем воспроизведение, когда объект загружен
            utils.close_popup();
            let user = store.get("user");
            v_peer.open_call_popup(user);
            //	video.play();
          };
          setTimeout(function () {
            //входящий стрим помещаем в объект видео для отображения
            document.getElementById("remVideo").srcObject =
              v_peer.peercall.remoteStream;
            document.getElementById("remVideo").onloadedmetadata = function (
              e
            ) {
              // и запускаем воспроизведение когда объект загружен
              document.getElementById("remVideo").play();
            };
          }, 1500);
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
    },
    cancel() {},
    on_open(id) {
      console.log("My peer ID is: " + id);
    },
    on_connection(data_connection) {
      console.log("connected to peer");
      this.conn = dataConnection;
      // Start Receive messages
      conn.on("data", function (data) {
        console.log("Received", data);
      });
    },
    on_disconnected() {
      status.innerHTML = "Connection lost. Please reconnect";
      console.log("Connection lost. Please reconnect");
      let my_video = document.getElementById("myVideo");
      let rem_video = document.getElementById("remVideo");
      let id = store.get("user").user_id;
      let user = utils.find_user(
        store.get("colling_user_id"),
        store.get("users")
      );
      utils.close_popup();
      v_peer.open_end_call_popup(user);
      my_video.pause();
      rem_video.pause();
      peer.reconnect();
    },
    on_close() {
      conn = null;
      status.innerHTML = "Connection destroyed. Please refresh";
      console.log("Connection destroyed");
    },
    on_error(err) {
      console.log("error=", err);
      // alert('error=' + err);
    },
    on_call(call) {
      v_peer.peercall = call;
      v_peer.open_answer_popup();
      //document.getElementById('callinfo').innerHTML="Входящий звонок <button onclick='callanswer()' >Принять</button><button onclick='callcancel()' >Отклонить</button>";
    },
    disconnect() {
      v_peer.peer.disconnect();
    },
    open_call_popup(user) {
      let str = `
				<div class="callPopup">
					<div class="callPopup-avatar">
						<img src="${user.avatar_url}" style = "width: 100%;" alt="">
					</div>
					<div class="callPopup-name">${user.fio}</div>
					<div class="callPopup-hangUpBtn" disconnect_button>
						<img src="./img/phone_close.svg" width="26px" height="26px">
						<div class="callPopup-hangUpBtnText" >Завершить</div>
					</div>
					<div class="callPopup-trayMode">В фоновом режиме</div>
				</div>
			`;
      utils.open_popup(str);
    },
    open_end_call_popup(user) {
      let str = `
				<div class="finishCallPopup">
					<div class="finishCallPopup-avatar">
						<img src="${user.avatar_url}" style = "width: 100%;" alt="">
					</div>
					<div class="finishCallPopup-status">Звонок завершён</div>
					<div class="finishCallPopup-addTaskBtn">
						Добавить задачу
					</div>
					<div class="finishCallPopup-manageBtns">
						<div class="finishCallPopup-closeBtn" close-call-end-popup>Закрыть</div>
						<div class="finishCallPopup-saveBtn">Сохранить</div>
					</div>
				</div>
			`;
      utils.open_popup(str);
    },
    open_answer_popup() {
      let user = store.get("users")[0];
      let str = `
				<div class="callPopup">
					<div class="callPopup-avatar">
						<img src="${user.avatar_url}" style = "width: 100%;" alt="">
					</div>
					<div class="callPopup-name">${user.fio}</div>
					<div class="callPopup-hangUpBtn" answer_button>
						<img src="./img/phone_close.svg" width="26px" height="26px">
						<div class="callPopup-hangUpBtnText">Принять</div>
					</div>
				</div>
			`;
      utils.open_popup(str);
    },
  };

  return v_peer;
})();
