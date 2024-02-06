$(document).ready(function(){

    let window_w = $(window).width()
    let deivce_sta = 'pc' //pc버전인지 모바일버전인지 따지겠다는 것
    if(window_w > 640){ //pc버전
        deivce_sta = 'pc'
    }else{//모바일버전
        deivce_sta = 'mobile'
    }
    console.log(deivce_sta)
    $(window).resize(function(){
        window_w = $(window).width()
        if(window_w > 640){ //pc버전
            deivce_sta = 'pc'
        }else{//모바일버전
            deivce_sta = 'mobile'
        }
        console.log(deivce_sta)
    })

    /* 메뉴에 마우스를 오버하면 header에 menu_open이라는 클래스 추가

    메뉴에서 마우스를 아웃하면 (메뉴를 벗어나면)
    -- 오버해서 생긴 흰배경을 벗어나 아웃됨
        .header
    header에서 menu_open 클래스를 삭세 */
    /* 키보드 접근성 : tab키로만 메뉴를 이동했을 때 메뉴에 접근하면 하위메뉴를 열어줘야한다
        중요함! */

    $('.header .gnb').on('mouseenter focusin', function(){
        if(deivce_sta == 'pc'){
            $(".header").addClass("menu_open");
        }
    })
    $('.header').on('mouseleave',function(){
        $(".header").removeClass("menu_open");
    })

    /* 마지막 메뉴에서 포커스가 아웃되면 메뉴를 모두 봣다고 판단하여
        열린 메뉴가 닫힌다 */
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout',function(){
        $(".header").removeClass("menu_open");
    })

    $('.header .gnb .gnb_open').on('click', function(){
        $(".header").addClass("menu_mobile");
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $(".header").removeClass("menu_mobile");
    })
}) /* $(document).ready */