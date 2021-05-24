$(document).ready(function() {
    $('.goBottom').click(function() {
        console.log('go_down');
        // var scrollHeight = $('body,html').prop("scrollHeight");
        $('body,html').animate({
            // scrollTop: document.getElementsByTagName('BODY')[0].scrollHeight
            // scrollTop: scrollHeight
            scrollTop: $('body,html')[0].scrollHeight
        }, 1000);
        return false;
    });

});