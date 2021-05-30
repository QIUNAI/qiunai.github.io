$(function() {
    //$('#navHeader').removeClass('header1');
    $("#bt3").click(function() {

        $("#in1").val("");
        $("#pwd").val("");

    });
    $("#bt1").click(function() {
        if ($("#in1").val() == "qiunai" || "qiu" && $("#pwd").val() == "20010120" || $("#in1").val() == "liang" && $("#pwd").val() == "20010808") {
            $('.ui.basic.modal')
                .modal('show');
        } else {
            $("#in1").val("");
            $("#pwd").val("");
            //$('#navHeader').removeClass('header1');
            alert("登录失败,请重新登录。");
        }

    });
    $("#bt2").click(function() {
        alert("当前时间不可以注册。");
    });
    $("#bt4").click(function() {
        $('.segment').dimmer('show');
        // right button


    });
    $("#bt5").click(function() {
        $('.segment').dimmer('hide');
        // right button


    });
});