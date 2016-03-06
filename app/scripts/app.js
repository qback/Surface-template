import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import enquire from 'enquire.js';
import 'slick-carousel';


$(() => {
	svg4everybody();

	// при ширине viewport < 480px вызываем слайдер
	enquire.register('screen and (max-width: 479px)', {
		match() {
			$('#slider').slick({
				arrows: false,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 6000,
				speed: 300,
				slidesToShow: 1
			});

			$('#sliderPlayers').slick({
				arrows: false,
				dots: true,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 6000,
				speed: 300,
				slidesToShow: 1
			});
		},
		unmatch() {
			$('#slider').slick('unslick');
			$('#sliderPlayers').slick('unslick');
		}

	});
});
