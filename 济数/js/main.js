jQuery(function($){

'use strict';

var CHARIOT = window.CHARIOT || {};

/* ==================================================
   Drop Menu
================================================== */

CHARIOT.subMenu = function(){
	$('#menu ul').supersubs({
		minWidth: 12,
		maxWidth: 27,
		extraWidth: 0 // set to 1 if lines turn over
	}).superfish({
		delay: 0,
		animation: {opacity:'show'},
		speed: 'fast',
		autoArrows: false,
		dropShadows: false
	});
};

/* ==================================================
   Mobile Navigation
================================================== */
/* Clone Menu for use later */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

CHARIOT.mobileNav = function(){
	var windowWidth = $(window).width();

	// Show Menu or Hide the Menu
	if( windowWidth >= 979 ) {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');
		}
	}
};

// Call the Event for Menu
CHARIOT.listenerMenu = function(){

	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');

		$('#navigation-mobile').stop().slideToggle(350, 'easeOutExpo');
		e.preventDefault();
	});
};

CHARIOT.mobileMenu = function(){
	$('#menu-nav-mobile li').children('.sub-menu').hide().parent().addClass('menu-parent-item');
	$('#menu-nav-mobile .menu-parent-item a').not('.sub-menu a').append('<i class="font-icon-arrow-down-simple-thin-round"></i>');

	$('#menu-nav-mobile .menu-parent-item').on('click', function(e) {
		e.preventDefault();
		$(this).children('.sub-menu').stop().slideToggle(350, 'easeOutExpo');
		$(this).toggleClass('open');
	});

	$('#menu-nav-mobile .sub-menu a').on('click', function(e) {
		e.stopPropagation();
	});
};

/* ==================================================
   Filter Team
================================================== */



/* ==================================================
   Filter Portfolio
================================================== */



/* ==================================================
   Filter Portfolio Masonry
================================================== */




/* ==================================================
   Masonry Blog
================================================== */



/* ==================================================
   DropDown
================================================== */



/* ==================================================
   Circular Graph
================================================== */



/* ==================================================
   FancyBox
================================================== */



/* ==================================================
   Accordion
================================================== */







/* ==================================================
	Animations Module
================================================== */

CHARIOT.animationsModule = function(){

	function elementViewed(element) {
		if (Modernizr.touch && $(document.documentElement).hasClass('no-animation-effects')) {
			return true;
		}
		var elem = element,
			window_top = $(window).scrollTop(),
			offset = $(elem).offset(),
			top = offset.top;
		if ($(elem).length > 0) {
			if (top + $(elem).height() >= window_top && top <= window_top + $(window).height()) {
				return true;
			} else {
				return false;
			}
		}
	};

	function onScrollInterval(){
		var didScroll = false;
		$(window).scroll(function(){
			didScroll = true;
		});

		setInterval(function(){
			if (didScroll) {
				didScroll = false;
			}

			if($('.chart').length > 0 ){
				$('.chart').each(function() {
					var currentChart = $(this);
					if (elementViewed(currentChart)) {
						CHARIOT.circularGraph(currentChart);
					}
				});
			}

			if($('.animated-content').length > 0 ){
				$('.animated-content').each(function() {
					var currentObj = $(this);
					if (elementViewed(currentObj)) {
						currentObj.addClass('animate');
					}
				});
			}

		}, 250);
	};

	onScrollInterval();
};

/* ==================================================
   Social Share
================================================== */


/* ==================================================
	Init
================================================== */


$(document).ready(function(){
	// Animation Transition Preload Page
	if($('.animation-enabled').length > 0 ){

		CHARIOT.reloader();

		$('body').jpreLoader({
			splashID: "#jSplash",
			showSplash: true,
			showPercentage: false,
			autoClose: true,
			splashFunction: function() {
				$('.circle, .circle-inverse').delay(50).animate({'opacity' : 1}, 100, 'linear');
			}
		}, function() {
			$("header").delay(150).animate({'opacity' : 1, 'marginTop': 0}, 500, 'easeOutExpo', function(){
				$('#main').delay(150).animate({'opacity' : 1}, 500, 'easeOutExpo', function(){
					$('footer').animate({'opacity' : 1}, 500, 'easeOutExpo');
				});
			});
		});
	}

	CHARIOT.animationsModule();

});



});
