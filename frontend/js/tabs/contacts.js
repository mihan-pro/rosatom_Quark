let tab_contacts = (function()
{
    let tab_contacts = 
    {
        show_users_tab()
        {
            let data = store.get("users");
            $("#header-title").html("Список сотрудников");
            $(".mainMenu-item.active").removeClass("active");
            $("#tab_contacts").addClass("active");
            $("#content_wrapper").attr("page", "contacts");
            this.parse_users_list(data);
        },
        parse_users_list(data)
        {
            let html = this.get_users_list_html(data);
            this.render_users(html);
        },
        render_users(data)
        {
            $("#main_section").html(data);
        },
        get_users_list_html(data)
        {
            let my_user = store.get("user");
            let res = '<div class="contactsPage" id = "contacts_list_tab_section">';
            res += data.map(user => 
            {
                    if(my_user.user_id == user.user_id) return "";
                    return `
                    <div class="contactItem">
                        <div class="contactItem-avatar">
                            <img src="${user.avatar_url}" width="60px" height="60px">
                        </div>
                        <div class="contactItem-name">${user.fio}</div>
                        <div class="contactItem-position">${user.user_position}</div>
                        <div class="contactItem-callBtn" call_button peer_id = '${user.user_id}'>
                            <img src="./img/callIcon.png">
                            <div class="contactItem-callBtnText">Вызов</div>
                        </div>
                        <div class="contactItem-communicationBtns">
                            <div class="chat-microBtn" mode = "width_text" audio_with_txt>
                                <img src="./img/microBtn.png">
                            </div>
                            <div class="chat-microBtn">
                                <img src="././img/penIco.png">
                            </div>
                        </div>
                        <div class="chat-headerMenu">
                            <img src="./img/more-horizontalBlack.png">
                        </div>
                    </div>
                `
            }).join("");

            return res + "</div>";
        }
    }

    return tab_contacts;
})()