//alert('안녕하세요');
// 확인창 alert - 잘 사용안함 자꾸 뜨는걸 고객이 좋아하지 않음
console.log('개발자모드에서만 확인가능한 메시지 출력')
//코딩의 결과를 확인하기 위한 용도 - javascript의 언어

var a = '한글' //a라는 변수에 '한글'이라는 값을 저장
a = '대한' //기존값을 지우고 다시 '대한' 으로 저장
var b = '민국'
a = a + b // ''(따옴표)를 사용하지않고 숫자만 쓰면 연산이 가능함
console.log(a)

var c = 5 
if(c == 5){ //만약에 c가 5와 같다면(비교연산자)
    console.log('c는 5입니다.') // 괄호안에 조건이 맞을경우 실행
}
if(c != 5){ //만약에 c가 5가 아니라면
    console.log('c는 5가 아닙니다.')
}

var d = 10
if(d > 10){ //d가 10보다 크다면
    console.log('d는 10보다 크다')
}else{ //if의 조건이 맞지 않다면 무조건 else를 실행
    console.log('d는 10이거나 10보다 작다')
}

var e = 10
if(e > 20){ // e가 20보다 큰 경우
    console.log('e는 20보다 크다')
}else if(e < 20){ // e가 20보다 작은경우
    console.log('e는 20보다 작다')
}else{ // e가 20인경우
    console.log('e는 20이다')
}

// if문의 특징 단 한번만 실행 

var e = '안녕'
console.log(e)
// var이라는 변수를 선언하는 방식 - 중복선언이 가능함

let abc = '대한'
console.log(abc)

//let abc = '민국' 이미 사용중인 변수를 또 선언하면 에러가 남
abc = '중복'
console.log(abc)

const bbb = '제이쿼리'
console.log(bbb)

let box_w = $('.box').width()
console.log(box_w)
/* js는 대부분 head태그 안에서 불러들임 
근데 js에서 html요소를 불러서 효과를 줌
그러나 아직 html요소가 로딩되기 전임 

<head>
    --js파일
 </head>
 <body>
    --htlm요소의 위치
 </body>
 이런 구조이기 때문에 js가 불렀을 때에는 hmtl은 
 로딩되기도 전임

 jquery는 호출될 때 단한번 작동됨
 근데 jquery는 조건이 될 ㄸㅐ 다시 한번 호출이 되도록 하는 기능이 있음
 */ 


 $(document).ready(function(){//html 문서가 모두 로딩된 이후에 1번 실행
    let box_h =  $('.box').height()
    console.log(box_h)

    $(window).resize(function(){
        let window_w = $(window).width()
        console.log(window_w)
    })

    $(window).scroll(function(){
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
    })
    /* box에 마우스를 오버하면 active 클래스를 추가
        box에서 마우스를 아웃하면 active 클래스를 삭제 */ 

    $('.box').on('mouseenter', function(){ //마우스를 오버했을 때
        //마우스를 오버한 box 자기 자신한테 active 클래스를 줌
        //$('.box').addClass('actvie') - 모든 박스에 class가 추가 됨
        $(this).addClass('actvie') //마우스를 오버한 자기자신
    })
    $('.box').on('mouseleave', function(){
        $(this).removeClass('actvie')
    }) 

    // box1dl 1초동안 opactiy가 0으로 점점점 변하는 애니메이션
    $('.box1').animate({
        opacity : 0
    }, 1000)

    /* btn_top을 누르면 상단으로 자동 스크롤 - 천천히 올라감  */
    $('.btn_top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500/* <- 초단위*/)
    })
}) /* $(document).ready */
