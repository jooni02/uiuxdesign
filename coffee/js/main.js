$(document).ready(function(){

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

    const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
    loop: true,
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
        480: {    /* 930 */
        slidesPerView: 2,
        spaceBetween: 16,
    },
		768: {    /* 930 */
			slidesPerView: 2,
			spaceBetween: 16,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 17,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 20,
		},
	    },
    });
		const social_swiper = new Swiper('.social .swiper', { /* 팝업을 감싼는 요소의 class명 */
		loop: true,
		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
		500: {    /* 500 */
			slidesPerView: 2,
			spaceBetween: 16,
		},
		768: {    /* 768 */
			slidesPerView: 3,
			spaceBetween: 16,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 17,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 20,
		},
		},
	});
	
	

	AOS.init({
		offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
		duration: 600, // 애니메이션 효과가 작동되는 시간
		easing: 'ease', // 가속도
	});

})//$(document).ready