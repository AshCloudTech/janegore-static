(function ($) {
	"use strict";

	$(window).on('load', function () {
		preloader();
		wowAnimation();
	});

	/*------------------------------------------
	= preloader
	-------------------------------------------*/
	function preloader() {
		$('#preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	}
	
	/*------------------------------------------
	= back to top
	-------------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.xb-backtotop').addClass('active');
		} else {
			$('.xb-backtotop').removeClass('active');
		}
	});  
	$(function () {
		$(".scroll").on('click', function () {
			$("html,body").animate({ scrollTop: 0 }, "slow");
			return false
		});
	});

	 // Sticky Header - Start
	// --------------------------------------------------
	if ($('.stricky').length) {
		$('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
	}
	$(window).on('scroll', function () {
		if ($('.stricked-menu').length) {
		var headerScrollPos = 150;
		var stricky = $('.stricked-menu');
		if ($(window).scrollTop() > headerScrollPos) {
			stricky.addClass('stricky-fixed');
		} else if ($(this).scrollTop() <= headerScrollPos) {
			stricky.removeClass('stricky-fixed');
		}
		}
	});
	// Sticky Header - End

	/*------------------------------------------
	= mobile menu
	-------------------------------------------*/
	$('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
	$('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');
	$('.xb-menu-toggle').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
			$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
		}
		$(this).toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
	});

	$('.xb-nav-hidden li.menu-item-has-children > a').click(function (e) {
		var target = $(e.target);
		if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
			e.stopPropagation();
			if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
				$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
				$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
			}
			$(this).find('.xb-menu-toggle').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
		}
	});
	$(".xb-nav-mobile").on('click', function () {
		$(this).toggleClass('active');
		$('.xb-header-menu').toggleClass('active');
	});

	$(".xb-menu-close, .xb-header-menu-backdrop").on('click', function () {
		$(this).removeClass('active');
		$('.xb-header-menu').removeClass('active');
	});

	/*------------------------------------------
	= nice select
	-------------------------------------------*/
	$('select').niceSelect();

	/*------------------------------------------
	= data background and bg color
	-------------------------------------------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));

	});


	/*------------------------------------------
	= wow animation
	-------------------------------------------*/
	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();
	}


	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	/*------------------------------------------
	= testimonial slide
	-------------------------------------------*/
	var slider = new Swiper(".testimonial-slider", {
		loop: true,
		spaceBetween: 20,
		speed: 400,
		slidesPerView: 3,
		centeredSlides: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'1024': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	var slider = new Swiper(".mh-testimonial-slider", {
		loop: true,
		spaceBetween: 30,
		speed: 400,
		slidesPerView: 5,
		centeredSlides: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'1024': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	var slider = new Swiper(".counceling-testimonial-slider", {
		loop: true,
		spaceBetween: 32,
		speed: 400,
		slidesPerView: 5,
		centeredSlides: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 3,
			},
			'1024': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	/*------------------------------------------
	= inhover active
	-------------------------------------------*/
	$(".xb-mouseenter").on('mouseenter', function () {
		$(".xb-mouseenter").removeClass("active");
		$(this).addClass("active");
	});
	$(".xb-mouseenter2").on('mouseenter', function () {
		$(".xb-mouseenter2").removeClass("active");
		$(this).addClass("active");
	});

	/*------------------------------------------
	= click button active
	-------------------------------------------*/
	$(function () {
		$('.category li').on('click', function () {
			var active = $('.category li.active');
			active.removeClass('active');
			$(this).addClass('active');
		});
	});

	/*------------------------------------------
	= click button active
	-------------------------------------------*/
	document.addEventListener("DOMContentLoaded", function () {
		const hilightText = document.querySelectorAll('.hilight-text');
		let current = 0;

		if (hilightText.length > 0) {
		setInterval(() => {
			hilightText.forEach(box => box.classList.remove('active'));
			hilightText[current].classList.add('active');
			current = (current + 1) % hilightText.length;
		}, 2000);
		}
	});

	/**
	 * Progress bar Active
	 */
		if ($(".progress-bar").length) {
			var $progress_bar = $('.progress-bar');
			$progress_bar.appear();
			$(document.body).on('appear', '.progress-bar', function() {
				var current_item = $(this);
				if (!current_item.hasClass('appeared')) {
					var percent = current_item.data('percent');
					current_item
						.css('width', percent + '%')
						.addClass('appeared')
						.append('<span>' + percent + '%</span>');
				}
			});
		}		
		
	/*------------------------------------------
	= magnificPopup
	-------------------------------------------*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	$('.popup-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
	});

	/*------------------------------------------
	= Accordion Box
	-------------------------------------------*/
	if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion_box");
			var target = $(this).parents(".accordion");

			if ($(this).next(".acc_body").is(":visible")) {
				$(this).removeClass("active");
				$(this).next(".acc_body").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc_body").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc_body").slideDown(300);
			}
		});
	}

	/*------------------------------------------
	= counter
	-------------------------------------------*/
	if ($(".xbo").length) {
		$('.xbo').appear();
		$(document.body).on('appear', '.xbo', function (e) {
			var odo = $(".xbo");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.xboOptions = {
				format: 'd',
			};
		});
	}
	

	/*------------------------------------------
	= marquee
	-------------------------------------------*/
	$('.marquee-left').marquee({
		speed: 10,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible: true,
	});	
	$('.marquee-left-2').marquee({
		speed: 20,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible: true,
	});	
	$('.marquee-right').marquee({
		speed: 20,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: false,
		startVisible: true,
	});	

	// datepicker
	$(".datepicker").datepicker();

	// modell single
	$(function () {
		$('.book-option .book-option-item').on('click', function () {
			var active = $('.book-option .book-option-item.active');
			active.removeClass('active');
			$(this).addClass('active');
		});
	});

	/*------------------------------------------
	= element parallax
	-------------------------------------------*/
	$('.xb-element-parallax').each(function () {
		var $this = $(this);
		var dampingFactor = 0.5;
		function handleMouseMove(e) {
			var offset = $this.offset();
			var mouseX = e.pageX - offset.left;
			var mouseY = e.pageY - offset.top;
			var translateX = (mouseX - $this.width() / 2) * dampingFactor;
			var translateY = (mouseY - $this.height() / 2) * dampingFactor;
			var translateTransform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
			$this.css({
				'transform': translateTransform,
				'transition': 'transform 0.1s ease-out'  // Adjust the duration and easing as needed
			});
		}
		function resetTransform() {
			$this.css({
				'transform': 'none',
				'transition': 'transform 0.3s ease-out'  // Adjust the duration and easing as needed
			});
		}
		if ($this.closest('.xb-parent-element-parallax').length) {
			var pare2 = $this.closest('.xb-parent-element-parallax');
			pare2.on('mousemove', function (e) {
				handleMouseMove(e);
			});
			pare2.on('mouseleave', resetTransform);
		} else {
			$this.on('mousemove', handleMouseMove);
			$this.on('mouseleave', resetTransform);
		}
	});

	// service Js
	function service_animation() {
		var active_bg = $(".service-list .active-bg");
		var element = $(".service-list .current");
	
		function activeServiceList(active_bg, e) {
			if (!e.length) {
				active_bg.css({ height: "100%" });
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".service-list").offset().top;
	
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
			e.closest(".service-list-item").removeClass("mleave").addClass("current");
			e.closest(".service-list-item").siblings().removeClass("current").addClass("mleave");
		}
	
		$(".service-list .service-list-item").on("mouseenter", function () {
			var e = $(this);
			var index = e.index();
	
			activeServiceList(active_bg, e);
			$(".service-images .service-image-item").removeClass("active").eq(index).addClass("active");
			$(".service-content-image .xb-item--img").removeClass("active").eq(index).addClass("active");
		});
	
		$(".service-list").on("mouseleave", function () {
			element = $(".service-list .current");
			var index = element.index();
	
			activeServiceList(active_bg, element);
	
			$(".service-images .service-image-item").removeClass("active").eq(index).addClass("active");
			$(".service-content-image .xb-item--img").removeClass("active").eq(index).addClass("active");
	
			element.closest(".service-list-item").siblings().removeClass("mleave");
		});
	
		$(".service-list .service-list-item").on("click", function () {
			$(".service-list .service-list-item").removeClass("current");
			$(this).addClass("current");
	
			var index = $(this).index();
			$(".service-images .service-image-item").removeClass("active").eq(index).addClass("active");
			$(".service-content-image .xb-item--img").removeClass("active").eq(index).addClass("active");
		});
		activeServiceList(active_bg, element);
	}
	
	service_animation();


	// testimonial
	var swiper = new Swiper(".history-slider-nav", {
		loop: true,
		spaceBetween: 10,
		speed: 500,
		slidesPerView: 7,
		centeredSlides: true,
		autoplay: {
			enabled: true,
			delay: 2000
		},
		breakpoints: {  
			'1400': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'577': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});
	var swiper2 = new Swiper(".history-slider", {
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			enabled: true,
			delay: 6000
		},
		slidesPerView: 1,
		thumbs: {
			swiper: swiper,
		},
	});

	/*------------------------------------------
	= TOUCHSPIN FOR PRODUCT SINGLE PAGE
	-------------------------------------------*/
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}

	/*------------------------------------------
	= woocommerce
	-------------------------------------------*/
	if ($(".checkout-section").length) {
		var showLogInBtn = $(".woocommerce-info > a");
		var showCouponBtn = $(".showcoupon");
		var shipDifferentAddressBtn = $("#ship-to-different-address");
		var loginForm = $("form.login");
		var couponForm = $(".checkout_coupon");
		var shippingAddress = $(".shipping_address");

		loginForm.hide();
		couponForm.hide();
		shippingAddress.hide();

		showLogInBtn.on("click", function (event) {
			event.preventDefault();
			loginForm.slideToggle();
			event.stopPropagation();
		});

		showCouponBtn.on("click", function (event2) {
			event2.preventDefault();
			couponForm.slideToggle();
			event2.stopPropagation();
		})

		shipDifferentAddressBtn.on("click", function (event3) {
			shippingAddress.slideToggle();
			event3.stopPropagation();
		})
	}



	
})(jQuery);


