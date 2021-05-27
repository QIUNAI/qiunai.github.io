$(function() {
    //$('#navHeader').removeClass('header1');
    $("#bt1").click(function() {
        if ($("#in1").val() == "qiunai" && $("#pwd").val() == "20010120" || $("#in1").val() == "liang" && $("#pwd").val() == "20010808") {
            $("#div").append('<a href = "https://qiunai.github.io/mainindex/index.html"> QiunaiMonster </a>');

            //alert("登录成功");
            //$('#navHeader').addClass('header1');
        } else {
            $("#in1").val("");
            $("#pwd").val("");
            //$('#navHeader').removeClass('header1');
            alert("登录失败");
        }
    });
    $("#bt2").click(function() {

        $("#in1").val("");
        $("#pwd").val("");

    });
});