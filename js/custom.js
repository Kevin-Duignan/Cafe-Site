$(function () {
	"use strict";

	// MENU
	$(".navbar .nav-link").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	$(window).on("scroll", function () {
		/*----------------------------------------------------*/
		/*  Navigtion Menu Scroll
        /*----------------------------------------------------*/

		var b = $(window).scrollTop();

		if (b > 500) {
			$(".navbar").addClass("scroll");
		} else {
			$(".navbar").removeClass("scroll");
		}
	});
});

// Researched JavaScript Implementation
(function () {
	Galleria.loadTheme(
		"galleria-1.6.1/dist/themes/twelve/galleria.twelve.min.js"
	);
	Galleria.run(".galleria");
})();
