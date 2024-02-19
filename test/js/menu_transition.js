$(document).ready(function(){
    /* 
        <div calss="gnb_bth open"> --메뉴 열기 버튼일 때
            <botton>메뉴열기</button>
        </div>

        <div calss="gnb_bth close"> --메뉴 닫기 버튼일 때
            <botton>메뉴닫기</button>
        </div>
    */

    $('.header .gnb .gnb_btn').on('click', function(){
        if($(this).hasClass('open') == true){ // open 클래스를 가지고 있으면 --  닫힘 > 열기로 바꿔야할 때
            $('.header').addClass('menu_open')
            $(this).removeClass('open')
            $(this).addClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴닫기')
        }else{ // open클래스가 없을 때 -- 열기 > 닫기 바꿔야할때
            $('.header').removeClass('menu_open')
            $(this).addClass('open')
            $(this).removeClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴열기')
        }
    })
    /* 
        메뉴열기 slideDown()
        메뉴 닥기 slideUp()
        같은 1차 메뉴를 클릭하는데 클릭할때마다 현재 메뉴가 열린 상태인지 아닌지를 판단
        열린 상태라면 li에 sub_open이라는 클래스가 있음
    */
    $(".header .gnb ul.depth1 > li > a ").on("click", function(e){
        e.preventDefault();
        let open_status = $(this).parent().hasClass('sub_open')
        console.log(open_status)
        if(open_status == true){ // 열려있는 상태 = sub_open 있느 상태
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        }else{
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
    });
})//$(document).ready