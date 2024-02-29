/*
    파일명 :common.js
    작성자 : 박지현
    작성일 : 2024.02.28
    설  성 : 모든 페이지에서 작동되는 jqeury (header,footer에서 작동되는 jquery)
*/
$(document).ready(function(){
    
    /************************************************************
        q브라우저가 스크롤이 되면 header fiexd 클래스 추가
        그러나 맨 위로 다시 올라가면 header에 fiexd 클래스 삭제
    *************************************************************/
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ 
            $('.header').addClass('fiexd')
        }else{ 
            $('.header').removeClass('fiexd')
        }
    }
    scroll_chk() //문서가 로드 되었을 때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })


    /************************************************************
        pc버전 메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
        이벤트 대상 : .header .gnb
                     .header .gnb ul.depth1 > li
                     .header .gnb ul.depth1 > li > a   
        1차메뉴 li에 마우스를 오버하면 해당 li에 on 클래스 추가
        이벤트 대상 : .header .gnb ul.depth1 > li
                     .header .gnb ul.depth1 > li > a
        이전에 마우스를 오버했던 li에는 on클래스를 삭제
        --> 이전에 오버했던 대상을 찾는 것보다.. 모든 li에 on을 삭제하고
            마우스를 오버한 li에만 마우스 추가
    *************************************************************/
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //pc버전
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //문서가 로딩되고 1번 실행
    $(window).resize(function(){
        device_chk() // 문서가 리사이즈될때마다 1번씩 실행
    })
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc' ){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave', function(){
        if(device_status == 'pc' ){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave', function(){
        if(device_status == 'pc' ){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave ', function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb ul.depth1 > li').removeClass('on')
    })
    $('.header .tnb .lang').on('focusin', function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb ul.depth1 > li').removeClass('on')
    })

    /*****************************************************
        모바일 메뉴 
        1차 메뉴 a를 클릭하면 a링크를 작동이 안되어야 하고
        하위메뉴를 열어줘야 함.
        .header .gnb .gnb_open,
        .header .gnb .gnb_close
     ****************************************************/
        $('.header .gnb ul.depth1 > li > a').on('click', function(e){
            if(device_status == 'mobile'){
            e.preventDefault(); /* a태그의 href를 작동 시키지 않음 */
            $(this).parent().addClass('on')
            }
        });
        $('.header .gnb .gnb_open').on('click', function(){
            $('.header').addClass('menu_open')
            $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        })
        $('.header .gnb .gnb_close').on('click', function(){
            $('.header').removeClass('menu_open')
            $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        })
})//$(document).ready