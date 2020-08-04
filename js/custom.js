 /*-----------------------------------------------------------------------------------
/* Custom Scripts
-----------------------------------------------------------------------------------*/

/* ----------------- Start Document ----------------- */
(function($){
	$(document).ready(function(){


/*----------------------------------------------------*/
/*	Navigation
/*----------------------------------------------------*/

	$(".menu li").hover(
			function () {
				$(this).find('ul:first').css({
					visibility: "visible",
					display: "none"
				}).stop(true, true).fadeIn(100);
			},
			function () {
				$(this).find('ul:first').css({
					visibility: "visible",
					display: "block"
				}).stop(true, true).fadeOut(100);
			}
	);

	selectnav('responsive', {
		label: 'Menu',
		nested: true,
		indent: '&nbsp;&nbsp;&nbsp;'
	});

	/*----------------------------------------------------*/
	/*	Fancybox2
	/*----------------------------------------------------*/
		$('[rel=fancybox]').fancybox({
			type        : 'image',
			openEffect  : 'elastic',
			closeEffect	: 'elastic',
			nextEffect  : 'elastic',
			prevEffect  : 'elastic',
			helpers : {
				title : {
					type : 'inside'
				},
				overlay : {
					css : {
						'background' : 'rgba(0, 0, 0, 0.85)'
					}
				}
			}
		});

		$('[rel=fancybox-gallery]').fancybox({
			openEffect  : 'elastic',
			closeEffect	: 'elastic',
			nextEffect  : 'elastic',
			prevEffect  : 'elastic',

			helpers : {
				title : {
					type : 'inside'
				},
				buttons	: {},
				overlay : {
					css : {
						'background' : 'rgba(0, 0, 0, 0.85)'
					}
				}
			}

		});

	
/* ------------------ End Document ------------------ */
});

})(this.jQuery);