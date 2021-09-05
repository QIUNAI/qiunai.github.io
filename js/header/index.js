const nav = $('#navHeader');
const navTop = nav.offset().top;
$(window).on('scroll', function() {
    const winTop_2 = $(window).scrollTop();
    /*if (winTop_2 > navTop) {
            //nav.addClass('header-bg-color');
            nav.addClass('header1');
            //nav.addClass('header2');
        }
        if ((winTop_2 <= navTop)) {
            //nav.removeClass('header-bg-color');
            nav.removeClass('header1');
            //nav.removeClass('header2');
        }*/
    if(winTop_2==0)
    {
        $('header').fadeOut(500);
    }
    var scrollFunc = function(e) {
        e = e || window.event;
        if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
            if (e.wheelDelta > 0) { //当滑轮向上滚动时 

                // nav.removeClass('header-bg-color');
                nav.removeClass('header1');
                //$('dark').fadeOut();
                $('header').fadeIn();
                //nav.removeClass('header2');

                //nav.removeClass('header2');
            }
            
                
                if (e.wheelDelta < 0) { //当滑轮向下滚动时 

                //nav.addClass('header-bg-color');
                nav.addClass('header1');
                //nav.addClass('header2');
                $('header').fadeOut(500);
                //nav.addClass('header2');
            }
            
            
        }
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
})