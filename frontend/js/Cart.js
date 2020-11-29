let Cart = (function () {
  let cart = {
    getTaskFromStore(id) {
      let data = store.get("tasks");
      return utils.find_task(id, data);
    },

    getTaskId(element) {
      console.log(element);
      return element.getAttribute("taskBtn");
    },

    show(event) {
      const id = this.getTaskId(event.target);
      const task_data = this.getTaskFromStore(id);
      const task_html = this.get_task_html(task_data);
      this.render(task_html);
    },

    close() {
      utils.close_popup();
    },

    render(cart_html) {
      utils.open_popup(cart_html);
    },

    getExecutersItems(executers) {
      let list = executers.map((item) => {
        if (!item) return "";
        return `
                <div class="task-executerItem">
                    <img src="${item.avatar_url}" width="39px" height="39px">
                    <div class="task-executerItemName">${item.fio}</div>
                    <div class="task-executerItemMoreBtn">
                        <img src="./img/more-horizontalBlack.png">
                    </div>
                    <div class="task-executerItemDelBtn">Удалить</div>
                    <div class="task-executerItemAddOneBtn">
                        <img src="./img/add_user.svg" width="22px">
                    </div>
                </div>
                `;
      });
      return list.join("");
    },

    get_task_html(data) {
      const users = store.get("users");
      const autorData = data.contributor.find(
        (item) => item.role == "Контролер"
      );
      const autor = utils.find_user(autorData.user_id, users);

      let executers = data.contributor.filter(
        (item) => item.role == "Исполнитель"
      );
      executers = executers.map((item) => {
        let id = item.user_id;
        return utils.find_user(id, users);
      });

      return `
            <div class="task" prioritet="${data.priority}">
            <div class="task-header">
                <div class="task-title">${data.task_title}</div>
                <div class="task-moreOptions">
                    <div class="task-headerDevider"></div>
                    <div class="task-headerMoreBtn">
                       <img src="./img/more-horizontal.png"> 
                    </div>                    
                </div>
            </div>
            <div class="task-content">
                <div class="task-timeBlock">
                    <div class="task-TimeBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/time-icon.png">
                            <div class="task-blockTopicText">Создание</div>
                        </div>
                        <div class="task-timeEndText">Окончание</div>
                    </div>
                    <div class="task-timeBlockContent TASK_CONTENT">
                        <div class="task-timeBlockStartDate">${
                          data.start_at
                        }</div>
                        <div class="task-timeBlockFinishDate">${
                          data.end_at
                        }</div>
                    </div>
                </div>
                <div class="task-priorityBlock">
                    <div class="task-prioritySubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/importancyIco.png" alt="">
                            <div class="task-prioritySubtitleText">Приоритет</div>
                        </div>
                    </div>
                    <div class="task-priorityBlockContent TASK_CONTENT">
                        <div class="task-priorityRadioBtn">
                            <div class="task-radio1"></div>
                            <div class="task-priorityRadioBtnText">Низкий</div>
                        </div>
                        <div class="task-priorityRadioBtn">
                            <div class="task-radio2"></div>
                            <div class="task-priorityRadioBtnText">Средний</div>
                        </div>
                        <div class="task-priorityRadioBtn">
                            <div class="task-radio3"></div>
                            <div class="task-priorityRadioBtnText">Высокий</div>
                        </div>
                    </div>
                </div>
                <div class="task-statusBlock">
                    <div class="task-statusBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/importancyIco.png" alt="">
                            <div class="task-statusBlockSubtitleText">Статус</div>
                        </div>
                    </div>
                    <div class="task-statusBlockContent TASK_CONTENT">
                        <div class="task-progressBar">
                            <div class="task-progressBarFillPart" style="width:${
                              data.rdy_at
                            }%"></div>
                            <div class="task-progressBarText">${
                              data.rdy_at
                            }%</div>
                            <div class="task-task-progressBarupdateBtn">
                                <img src="./img/updateIco.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>                
                <div class="task-descriptionBlock">
                    <div class="task-statusDescriptionSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/pencilIco.png">
                            <div class="task-statusDescriptionSubtitleText">Описание</div>
                        </div>
                        <div class="task-rollBtn">
                            <img src="./img/rowUp.png">
                        </div>
                    </div>
                    <div class="task-descriptionContent TASK_CONTENT">
                        <textarea
                        wrap="soft" class="task-descriptionInput" placeholder="Введите описание" id=""
                        >${data.description || ""}</textarea>
                    </div>
                </div>
                <div class="task-autorBlock">
                    <div class="task-autorBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/personIcoBlack.png">
                            <div class="task-autorBlockSubtitleText">Автор</div>
                        </div>
                    </div>
                    <div class="task-autorBlockContent TASK_CONTENT">
                        <div class="task-autorItems">
                            <div class="task-autorItem">
                                <img src="${
                                  autor.avatar_url
                                }" width="39px" height="39px">
                                <div class="task-autorItemName">${
                                  autor.fio
                                }</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="task-executersBlock">
                    <div class="task-executersBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/peopleIco.png">
                            <div class="task-executersBlockSubtitleText">Исполнители</div>
                        </div>
                        <div class="task-rollBtn">
                            <img src="./img/rowUp.png">
                        </div>
                    </div>
                    <div class="task-executersBlockContent TASK_CONTENT">
                        <div class="task-executersItems">
                        ${this.getExecutersItems(executers)}
                        </div>
                    </div>
                </div>
                <div class="task-audioFilesBlock">
                    <div class="task-audioFilesBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/microIconBlack.png">
                            <div class="task-executersBlockSubtitleText">Аудиофайлы</div>
                        </div>
                        <div class="task-rollBtn">
                            <img src="./img/rowUp.png">
                        </div>
                    </div>
                    <div class="task-audioFilesBlockContent TASK_CONTENT">
                        <div class="task-audioFilesItems">
                            <div class="task-audioFileItem">
                                <div class="task-audioFileItemPlayBtn">
                                    <img src="./img/PlayAudioIco.png" alt="">
                                </div>
                                <div class="task-audioFileItemDiogramm">
                                    <div class="task-audioFileItemWrapper">
                                        <img src="./img/Seekbar.png">
                                        <img src="./img/Seekbar.png">
                                        <img src="./img/Seekbar.png">
                                    </div>
                                </div>
                                <div class="task-audioFileItemTranslateBtn">
                                    <img src="./img/AudioTranslateIcoBlack.png">
                                </div>
                                <div class="task-audioFileItemDelBtn">Удалить</div>
                                <div class="task-audioFileItemAddOneBtn">
                                    <img src="./img/microBtn.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="task-attachmentsBlock" close>
                    <div class="task-attachmentsBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/AttachmentIcoBlack.png">
                            <div class="task-attachmentsBlockSubtitleText">Вложения </div>
                        </div>
                        <div class="task-rollBtn">
                            <img src="./img/rowUp.png">
                        </div>
                    </div>
                    <div class="task-attachmentsBlockContent TASK_CONTENT">
                        <div class="task-attachmentsItems">
                            <div class="task-attachmentItem">
                                <div class="task-attachmentItemText">Нет вложений</div>
                                <div class="task-audioFileItemAddOneBtn">
                                    <img src="./img/attachmentWhite.png" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="task-resolutionBlock">
                    <div class="task-resolutionBlockSubtitle TASK_SB">
                        <div class="task-blockTopic">
                            <img src="./img/burgerBlack.png">
                            <div class="task-resolutionBlockSubtitleText">Резолюция </div>
                        </div>
                        <div class="task-rollBtn">
                            <img src="./img/rowUp.png">
                        </div>
                    </div>
                    <div class="task-resolutionBlockContent TASK_CONTENT">
                        <div class="task-resolutionItems">
                            <div class="task-resolutionItem">
                                <div class="task-resolutionItemText">${
                                  data.resolution.message
                                }</div>
                                <div class="task-resolutionItemAddOneBtn">
                                    <img src="./img/burgerWhite.png" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="task-footer">
                <div class="task-footerMainBtns">
                    <div class="task-cancelBtn" id="task_card_cancel_btn">Отмена</div>
                    <div class="task-saveButton" id="task_card_save_btn">Сохранить</div>
                </div>
                <div class="task-chat-button">
                    <img src="./img/taskItemChatIco.png">
                </div>
            </div>            
        </div>
            `;
    },
  };
  return cart;
})();
