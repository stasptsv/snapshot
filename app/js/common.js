$(function() {

	$(document).ready(function() {
		$(".owl-carousel").owlCarousel({
				items : 3,
				itemsDesktop : [1199,3],
				itemsDesktopSmall : [979,3],
				slideSpeed: 300,
				itemsDesktop : [1199,2],
				itemsTablet: [768,1],
				itemsTabletSmall: [985,2],
				itemsMobile : [479,1],
		});
	});
/* Home Slideshow Vegas
-----------------------------------------------*/
$(function() {
	$('body').vegas({
			slides: [
					{ src: 'img/home/home1.jpg' },
					{ src: 'img/home/home2.jpg' },
					{ src: 'img/home/home3.jpg' }
			],
			timer: false,
			transition: [ 'zoomIn', ],
			animation: ['kenburns']
	});
});

$('.navigation-mobile__button').click(function() {
if ($('.navigation-wrap').is(':visible')) {
	$('.navigation-wrap').hide('slow');
}
else {
	$('.navigation-wrap').show('slow');
}
});

});
