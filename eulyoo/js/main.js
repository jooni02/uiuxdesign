$(document).ready(function(){ /* html 로딩 시 단 한번만 실행함 */
    //visual 팝업을 작동시키는 라이브러리
    const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

    effect: "fade", /* fade 효과 */

    autoplay: {  /* 팝업 자동 실행 */
        delay: 3000, //3초
        disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.visual .pagination', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
    },

    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.visual .prev',  
    },

    });
    /*
        .visual .swiper .stop
        정지버픈을 누르면 팝업 정지 - 재생버튼이 보이면서 정지버튼이 숨겨짐

        .visual .swiper .play
        재생버튼
    */
    $('.visual .swiper .stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(".visual .swiper .play").show(); //보임
        $(".visual .swiper .stop").hide(); //숨김
    })
    $('.visual .swiper .play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
        $(".visual .swiper .play").hide();
        $(".visual .swiper .stop").show();
    })

    /* 브라우저를 스크롤하면 header에 fiexd 클래스를 추가할 예정
    단, 스크롤이 조금이라도 내려가면 fixed를 추가하지만 다시 상단으로 이동하면 fixed 클래스를 삭제
    -- 스크롤 값을 아는게 필요함
    */

    let scrolling // 브라우저가 스크롤 된 값을 저장
    
    function scroll_chk(){ // 함수의 선언
        scrolling = $(window).scrollTop() //브라우저가 스크롤 된 값을 scrolling에 저장
        console.log(scrolling)
        if(scrolling > 0){ //스크롤을 내렸다는 의미
            $('.header').addClass('fiexd')
        }else{ // 스크롤이 맨 위에 있는 경우(안내렷을 때)
            $('.header').removeClass('fiexd')
        }
    }
    scroll_chk() //함수의 실행 -- 브라우저가 로딩 되었을 때 단 1번 실행

    $(window).scroll(function(){
        scroll_chk() //함수의 실행 -- 스크롤 할 때 마다
    })

});//$(document).ready
