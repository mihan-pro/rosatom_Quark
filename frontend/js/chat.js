let _chat = (function()
{
    let _chat = 
    {
        close_chat()
        {
            $("#chat_id").attr("closeChat", true);
        },
        open_chat()
        {
            $("#chat_id").removeAttr("closeChat");
        }
    }

    return _chat;
})();