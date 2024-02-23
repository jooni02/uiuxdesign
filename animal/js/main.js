$(document).ready(function(){
    /*  */

    /*
        1차 메뉴에 (.header .depth1 > li)에 마우스를 오버하면  
        오버한 li (this) 에 sub_over 클래스를 추가
        header에는 menu_over 클래스 추가
    */
   $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('header').addClass('menu_over')
   })
   $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('header').removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('header').removeClass('menu_over')
    })

    /* swiper */
        const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
    delay: 2000,
    disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.visual .prev',  
    },

    });

    /* 
        .visual .ctrl_btn .stop 정지버튼을 클릭하면
        팝업은 정지됨, stop사라짐, play버튼 나타남 
        .visual .ctrl_btn .play 재생버튼을 클릭하면
        팝업은 재생되고 ,stop버튼은 나타나고 play사라짐
    */
    $('.visual .ctrl_btn .stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능  > const에 있는 swiper랑 동일하게 swiper로 들어가야함 */
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 > const에 있는 swiper랑 동일하게 swiper로 들어가야함 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
    })
    
    /* 
        .lost .list > ul > li 클릭하면
        li에 active 클래스 추가
        이전에 active클래스가 있던 li의 active는 삭제
    */
   $('.lost .list > ul > li').on('click',function(){
        $('.lost .list > ul > li').removeClass('active')  
        $(this).addClass('active')
   })

   /* 입양 팝업  */
   const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {   
                slidesPerView: 4, /* 사이즈 제한 */
                spaceBetween: 0,
            },
            1320: { 
                 slidesPerView: 'auto',
                 spaceBetween: 0,
            },
        },
        navigation: {
            nextEl: '.adopt .next',
            prevEl: '.adopt .prev',
        },
    });
// adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
// adopt_swiper.autoplay.start();  /* 재생 기능 */
	
    $('.adopt .ctrl_btn .stop').on('click', function(){
        adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .play').show()
    })
    $('.adopt .ctrl_btn .play').on('click', function(){
        adopt_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .stop').show()
    })



})