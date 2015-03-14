;(function($, window, undefined){
	// closure
	$.fn.carousel = function(){
		return this.each(function( prev, sig){
			$container = $(this).children().eq(0);
			console.log($container);

			if ($container) {
				var $fotos = $container.children();
				var cantidad = $fotos.length;
				var incremento = $fotos.outerWidth(true);
				var enCarousel = Math.floor($(this).width() / incremento);
				var primerElemento = 1;
				var estaMoviendo = false;


			};

			$container.css('width', (cantidad + enCarousel) * incremento);
			for (var i = 0; i < enCarousel ; i++) {
				$container.append($fotos.eq(i).clone());
			};

			$(sig).click(function(e){
				e.preventDefault();

				estaMoviendo = true;
				if (!estaMoviendo) {
					$container.animate({
						left: '-=' + incremento,
						'swing', function(){
							estaMoviendo =  false;
						}
					})
				};
			});

		});
	}
})(jQuery, window)