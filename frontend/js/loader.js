let loader = (function () {
  let loader = {
    send(
      url,
      type = "GET",
      callbackSuccess = console.log,
      callbackError = console.log,
      args = {}
    ) {
      $.ajax({
        url: url,
        crossDomain: true,
        dataType: "json",
        type: type,
        contentType: "application/json",
        data: JSON.stringify(args),
        async: true,
        cashe: false,
        success: function success(data) {
          callbackSuccess(data);
        },
        error: function error(err) {
          if (callbackError) callbackError(argsError);
          console.log("err= " + err);
        },
      });
    },
    send_audio(data) {
      $.ajax({
        url: "http://213.189.217.212:8888/asr/",
        data: data,
        processData: false,
        contentType: false,
        crossDomain: true,
        async: true,
        type: "POST",
        success: function success(data) {
          audio_manager.parse_audio_data.call(audio_manager, data);
        },
        error: function error(err) {
          // alert("Audio ERROR")
          console.log("err=", err);
        },
      });
    },
  };

  return loader;
})();
