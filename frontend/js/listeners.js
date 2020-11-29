$("#get_users").on("click", main.get_users.bind(main));
//Звонки
$("#answer_button").on("click", v_peer.answer.bind(v_peer));
$(document).on("click", "[call_button]", v_peer._call.bind(v_peer));
$(document).on("click", "[disconnect_button]", v_peer.disconnect.bind(v_peer));
$(document).on("click", "[close-call-end-popup]", utils.close_popup);
//Авторизация
$("#auth_form").on("submit", auth.on_submit_form.bind(auth))
//Запись аудио
$(document).on("click", "[audio_with_txt]", audio_manager.start_rec_with_text.bind(audio_manager));
//Табы
$("#tab_contacts").on("click", tab_contacts.show_users_tab.bind(tab_contacts));
$("#tab_tasks").on("click", tab_tasks.show_tasks_tab.bind(tab_tasks));
$("#tab_bpmn").on("click", tab_bpmn.show_bpmn_tab.bind(tab_bpmn));
//Аудио управление
$("#audio_control").on("click", audio_manager.start_rec_with_text.bind(audio_manager));

//Чат
$(document).on("click", "[chat-microBtn]", utils.close_popup);
$("#close_chat").on("click", _chat.close_chat);
$(document).on("click", "[audio_id]", audio_manager.play_audio.bind(audio_manager))
$("#open_chat_btn").on("click", _chat.open_chat.bind(_chat));

// Одна таска
$(document).on("click", "[taskBtn]", Cart.show.bind(Cart));
$(document).on("click", "#task_card_cancel_btn", Cart.close.bind(Cart));
$(document).on("click", "#task_card_save_btn", Cart.close.bind(Cart));

//События стора
store.add_listener("tasks", tab_tasks.parse_tasks_list.bind(tab_tasks));