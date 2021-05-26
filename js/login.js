$(function() {
    $('#navHeader').removeClass('header1');
    $("#bt1").click(function() {
        if ($("#in1").val() == "qiunai" && $("#pwd").val() == "123") {
            $("#div").append('<a href = "https://qiunai.github.io/tags/index.html"> QiunaiMonster </a>');
            //$('#navHeader').addClass('header1');
        } else {
            //$('#navHeader').removeClass('header1');
        }
    });
});