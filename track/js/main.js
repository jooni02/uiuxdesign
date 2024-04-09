$(document).ready(function(){
    var sticky = new Sticky('[data-sticky]');  
    
    var scrolling //스크롤된 값
    var window_h // 윈도우 높이
    
    function scroll_chk(){
        scrolling = $(window).scrollTop();
        window_h = $(window).height();
        opacity_change('.intro .intro_tit', 0, 0.002, 'hide')
        opacity_change('.intro .bg', 450, 0.002, 'show')
        move_change('.intro .photo ul li.move', 0.05)

        if((scrolling >= $('.visual').offset().top) && (scrolling <= $('footer').offset().top + $('footer').height())){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    function opacity_change(obj, start, speed, mode){
        if(mode == 'hide'){
            if(scrolling > start){
                //console.log(scrolling, start, speed)
                $(obj).css({"opacity": (1-((scrolling - start)*speed))})
            }else{
                $(obj).css({"opacity": 1});    
            }
        }else{
            if(scrolling > start){
                $(obj).css({"opacity": (scrolling - start)*speed})
            }else{
                $(obj).css({"opacity": 0});    
            }
        }
    }
    function move_change(obj, speed){
        console.log($(obj).offset().top)
        if(scrolling >= ($(obj).offset().top - window_h)){
            $(obj).attr('style', 'transform:translate(0, '+ ($(obj).offset().top - scrolling - window_h)*speed  +'px)')
        }
    }
    scroll_chk()
    $(window).resize(function(){
        scroll_chk()
    })
    $(window).scroll(function(){
        scroll_chk()
    })
  
    /* guide1 */
    
	$('.guide1 .list ul li').on('mouseenter', function(){
        $('.guide1 .list ul li').removeClass('on')
        $(this).addClass('on')
    })
    
    AOS.init({
        offset: 130, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });
}) ////document.ready
