$(document).ready(function(){
	console.log('안녕하세요')
    /* 브라우저를 스크롤했을 때 맨위면 header에 fixed라는 클래스를 삭제
        조금이라도 아래로 스크롤 된 상타라면 header에 fixed라는 클래스 줌 
    
        1. 브라우저가 스크롤 된 정도를 표시한 값
            $(window).scrollTop() -> 너무길어서 변수로 대신 부르는걸 let sorolling으로 부를수있음
        2. 만약 스크롤 값이 0이라면
            header에 fixed라는 클래스를 삭제
            만약 스크롤값이 0보다 크다면
            header에 fixed라는 클래스를 줌
        3. 다 작업 후 console은 주석으로 걸어주기

    */
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop()  
        //console.log(scrolling)
        // 조건문 - scrolling값이 0보다 크면 (충족시)
        if(scrolling > 0){
            //console.log('0보다크다');
            $(".header").addClass("fixed");
        }else{ //0일때 - 맨 위에 있을 때 (충족이 안될시)
            //console.log('0이다');
            $(".header").removeClass("fixed");
        }

    });//$(window).scroll
});//$(document).ready
