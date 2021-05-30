$(function() {
    //$('#navHeader').removeClass('header1');
    $("#bt3").click(function() {

        $("#in1").val("");
        $("#pwd").val("");

    });
    $("#bt1").click(function() {
        if ($("#in1").val() == "qiunai" && $("#pwd").val() == "20010120" || $("#in1").val() == "lks" && $("#pwd").val() == "20010808") {
            $('.ui.basic.modal')
                .modal('show');

        } else {
            $("#in1").val("");
            $("#pwd").val("");
            //$('#navHeader').removeClass('header1');
            alert("兄弟，这么拉了，密码账号都记不住了？再试一下吧！");
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
    $("#a1").click(function() {
        alert("别磨磨蹭蹭的了，快点进站，喂，你老婆丢了！");
    });
    $("#a2").click(function() {
        alert("欢迎进站，老婆没丢吧？");
    });
});