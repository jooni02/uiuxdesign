$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		effect: "fade", /* 부드럽게 */ 

		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},

		loop: true,

		navigation: {
			nextEl: '.visual .next',
			prevEl: '.visual .prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
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
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		768: {    /* 768px 이상일때 적용 */
		slidesPerView: 2,
		spaceBetween: 28,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 2,
			spaceBetween: 30,
		},


		navigation: {
			nextEl: '.Attrac .Attrac_btn .next',
			prevEl: '.Attrac .Attrac_btn .prev',
		},
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.Attrac .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="page' + (index + 1) + ' '+className+'"><span></span></span>';
            },
        },
		on: {
			slideChange: function(){
				$('.Attrac .paging_num').html('<strong>'+this.realIndex + 1 +'</strong> / '+ this.loopedSlides);
			}
		},
		
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		// onSlideChangeEnd:function(e){
		// 	Attrac_swiper.update(true);
		// }
	});

	Attrac_swiper.on('slideChangeTransitionEnd', function(){
		Attrac_swiper.slideReset();
	})

	const theme_swiper = new Swiper('.theme .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			500: {    /* 768px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 20,
			},
			768: {    /* 768px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1024: {   /* 1024px 이상일때 적용 */
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
		navigation: {
			nextEl: '.theme .swiper-button-next',
			prevEl: '.theme .swiper-button-prev',
		},
	});
	
	const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			1024: {   /* 1024px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1280: {    /* 1280px 이상일때 적용 */
				slidesPerView: 6,
				spaceBetween: 28,
			},
		},
		navigation: {
			nextEl: '.news .swiper-button-next',
			prevEl: '.news .swiper-button-prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.news .swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});
}) ////document.ready
