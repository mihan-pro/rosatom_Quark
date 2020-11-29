let tab_bpmn = function(){
    let bpmn = {
        show_bpmn_tab: function()
        {
            console.log("work")
            $("#header-title").html("BPMN Конструктор");
            $(".mainMenu-item.active").removeClass("active");
            $("#tab_bpmn").addClass("active");
            $("#content_wrapper").attr("page", "bpmn");
        },
    }

    return bpmn;
}();