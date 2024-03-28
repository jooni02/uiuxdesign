$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

    effect: "fade", /* 부드럽게 */ 

	autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	},

	loop: true,

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
	});


	/* pc버전시 메뉴에 오버하면 hedaer 스타일 변경 */
	let window_w // 브라우저 넓이
	let device_status // 모바일모드인지 pc모드인지 구분
	let mobile_size = 768
	function device_chk(){
		window_w = $(window).width()
		if(window_w > mobile_size){ 
			device_status = 'pc'
		}else{ 
			device_status = 'mobile'
		}
	}
	device_chk()
	$(window).resize(function(){
		device_chk()
	})
	$('header .header_sub ul.depth1 > li').on('mouseenter focusin', function(){ /* 일회용 function*/
		if(device_status == 'pc'){
			console.log('dsfdsfsf');
			$('header .header_sub .gnb ul.depth1 > li').removeClass('on') /* 메뉴오버하지 않을때 날릴태그*/
			$(this).addClass('on')
		}
	})
	$('header .header_sub .gnb ul.depth1 > li').on('mouseleave', function(){ /* 일회용 function*/
		$('header .header_sub .gnb ul.depth1 > li').removeClass('on')
		
	})

	//메뉴 바로 뒤에는 로그인 버튼이 있음, 로그인 버튼에 포커스 되면 메뉴의 오버상태 해제
	$('.header .tnb03 .login').on('focusin',function(){
		$('.header').removeClass('on')
	})

	const Attrac_swiper = new Swiper('.Attrac .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		autoHeight: true,
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.Attrac .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="page' + (index + 1) + ' '+className+'"><span></span></span>';
            },
        },
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		onSlideChangeEnd:function(e){
			Attrac_swiper.update(true);
		}

	});


}) ////document.ready