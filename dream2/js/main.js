$(document).ready(function(){ /* html 로딩 시 단 한번만 실행함 */
    let scrolling // 스크롤 얼만큼 되었나

    function scroll_chk(){ // 1)반복할 함수를 선언하면 /* 다회용 function*/
        scrolling = $(window).scrollTop() //let은 한번만
        console.log(scrolling)
        if(scrolling > 0){ // 스크롤 된 값이 0보다 크면 - fixed 클래스 추가
            $('.header').addClass('fixed')
        }else{ // 같거나 작거나 - fixed 클래스 삭제
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() // 2)함수의 호출을 함

    $(window).scroll(function(){ //브라우저가 스크롤 될때마다 한번만 실행
        scroll_chk()
    }) //$(window).scroll

    /* pc버전시 메뉴에 오버하면 hedaer 스타일 변경 */
    let window_w // 브라우저 넓이
    let device_status // 모바일모드인지 pc모드인지 구분
    let mobile_size = 640
    function device_chk(){
        window_w = $(window).width() //브라우저 넓이 저장
        if(window_w > mobile_size){ //pc버전 
            devuce_status = 'pc'
        }else{ //640부터 그 이하
            device_status = 'mobile'
        }
        //console.log(device_status)
    }//function device_chk
    device_chk() // 함수호출
    $(window).resize(function(){

    })
    $('.header .gnb').on('mouseenter focusin', function(){ /* 일회용 function*/
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){ /* 일회용 function*/
        $('.header').removeClass('menu_over')
    })

    //메뉴 바로 뒤에는 로그인 버튼이 있음, 로그인 버튼에 포커스 되면 메뉴의 오버상태 해제
    $('.header .tnb .login').on('focusin',function(){
        $('.header').removeClass('menu_over')
    })

    /* 모바일 메뉴 열기/닫기 */
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })

    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
	/* a 태그의 href를 작동 시키지 않음 */
        if(device_status == 'mobile'){
            e.preventDefault();
            $(this).parent().toggleClass('sub_open')
        }      
    });

    /* top버튼 클릭하면 위로 올라가라는 의미*/
    $('.footer .top').on('click',function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

    // 팝업창 
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    });

});//$(document).ready
