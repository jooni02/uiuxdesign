$(document).ready(function(){
    var sticky = new Sticky('[data-sticky]');   
    
    var max = 200 //100% 투명할때의 스크롤 값
    var min = 450
    $(window).scroll(function(){
        var scrollPX = $(this).scrollTop();
        if( scrollPX  < max ) {
            $(".intro .intro_tit").css({"opacity": (max-scrollPX)/max });
        }else{
            $(".intro .intro_tit").css({"opacity": 0});
        }
        if(scrollPX > min) {
            $(".intro .bg").css({"opacity": (scrollPX-min)/min });
        }else {
            $(".intro .bg").css({"opacity": 0});
        }

    });

}) ////document.ready
