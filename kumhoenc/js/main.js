/*
    파일명 :main.js
    작성자 : 박지현
    작성일 : 2024.02.28
    설  성 : header 빼고 메인페이지에서 사용된 jqeury
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: 'visual.next',  /* 다음 버튼의 클래스명 */
            prevEl: 'visual.prev',  
        },
    });
    $('.visual .btn_ctrl button.stop').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl button.play').show()
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual .btn_ctrl button.play').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl button.stop').show()
        visual_swiper.autoplay.start();  /* 재생 기능 */
    })
})//$(document).ready