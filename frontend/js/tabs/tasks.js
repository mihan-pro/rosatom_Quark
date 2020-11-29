let tab_tasks = (function()
{
    let tab_tasks = 
    {
        show_tasks_tab()
        {
            let data = store.get("tasks");
            $("#header-title").html("Задачи");
            $(".mainMenu-item.active").removeClass("active");
            $("#tab_tasks").addClass("active");
            this.parse_tasks_list(data);
            $("#content_wrapper").attr("page", "tasks");
        },
        parse_tasks_list(data)
        {
            let html = this.get_tasks_list_html(data);
            this.render_tasks(html);
        },
        render_tasks(data)
        {
            $("#main_section").html(data);
        },
        get_tasks_list_html(data)
        {/*
            assign_at: {user_id: "f27221a5-3311-4593-bf6c-c1ddd22ab004"}
            user_id: "f27221a5-3311-4593-bf6c-c1ddd22ab004"
            end_at: "2020-11-27T09:37:33.673Z"
            priority: "low"
            rdy_at: 0
            resolution: {message: "Согласовано.", user_id: "4810a9b8-dc03-4fbb-b561-3510ae17bcad"}
            message: "Согласовано."
            user_id: "4810a9b8-dc03-4fbb-b561-3510ae17bcad"
            start_at: "2020-11-22T09:37:33.673Z"
            status: "todo"
            tags: ["Задача", "Пользователь"]
            0: "Задача"
            1: "Пользователь"
            task_description: null
            task_id: "9d8f9567-c129-4130-88b8-19e2da275c58"
            task_title: "Проведение испытаний"
            */
            let res = '<div class="taskPage">';
            const users = store.get("users");
            res += data.map(task => 
            {
                const autorData  = task.contributor.find((item)=> item.role == "Контролер");
                const autor = utils.find_user(autorData.user_id, users);
                let readiness = task.rdy_at === 100;
                let readyFor = !readiness ? task.rdy_at+"%":"Выполнена";
                contrubutorsCount = task.contributor.length;
                return `
                <div class="taskPage-item" prioritet="${task.priority}" taskBtn="${task.task_id}">
                    <div class="taskPage-itemName">${task.task_title}</div>
                    <div class="taskPage-itemDate">
                        <img src="./img/time-icon.png" class="taskPage-itemDateIco">
                        <div class="taskPage-itemDateText">${task.end_at.split(" ")[0] + " " + task.end_at.split(" ")[1]}</div>
                    </div>
                    <div class="taskPage-itemDevider"></div>
                    <div class="taskPage-itemWorkingStatus" style="padding-right: ${readiness?"0":"38"}">
                        <div class="taskPage-itemWorkingStatus-fillPart" style="width:${task.rdy_at}%"></div>
                        <div class="taskPage-itemStatusText">${readyFor}</div>
                        <div class="taskPage-itemWorkingStatus-updateBtn" style="display:${readiness?"none":"flex"}">
                            <img src="./img/updateIco.png">
                        </div>
                    </div>
                    <div class="taskPage-itemDevider" ></div>
                    <div class="taskPage-itemParticipants">
                        <div class="taskPage-addPersonBtn  d-none">
                            <img src="./img/add_user.svg" width="22px">
                        </div>
                        <div class="taskPage-itemExistParticipants">
                            <img src="${autor.avatar_url}">
                            <div class="taskPage-itemExistCount">
                                <span>+</span><span>${contrubutorsCount|| 0}</span>
                            </div>
                        </div>
                    </div>
                    <div class="taskPage-itemDevider"></div>
                    <div class="taskPage-itemAttacmentsBtns">
                        <div class="taskPage-itemAttachmentFiles">
                            <img src="././img/microIconBlack.png">
                            <div class="taskPage-itemAttachmentFilesText">${Math.round(Math.random()*10)}</div>
                        </div>
                        <div class="taskPage-itemAttachmentFiles">
                            <img src="././img/AttachmentIcoBlack.png">
                            <div class="taskPage-itemAttachmentFilesText">${Math.round(Math.random()*10)}</div>
                        </div>
                    </div>
                    <div class="taskPage-itemDevider"></div>
                    <div class="taskPage-itemChatButton">
                        <img src="./img/taskItemChatIco.png">
                    </div>
                    <div class="taskPage-itemDevider"></div>
                    <div class="taskPage-itemMoreBtn">
                        <img src="./img/more-horizontalBlack.png">
                    </div>
                </div>
                `
            }).join("");

            return res + "</div>";
        }
    }

    return tab_tasks;
})()