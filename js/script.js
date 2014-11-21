$(function() {

	/* Vars */

	var TIME = 500;

	var pics = $('.ref-pic');
	var refs = $('.ref-block');

	var navItem = $('.nav-item');


	/* Handlers */
	var menuItemHandler = function(event) {
		event.preventDefault();
		hash = $(this).children('a')[0].hash;

		$('html').animate(function() {
			offsetY = $(hash).position.top;
			console.log(offsetY);
			window.scrollY = offsetY
		}, TIME);
	}

	var refHandler = function(event) {
		var $this = $(this);
		var ACT = 'active';
		var i = $this.index();

		if (! $this.hasClass( ACT )) {
			pics.removeClass( ACT );
			$this.addClass( ACT );

			refs.hide( TIME );
			refs.eq(i).show( TIME );
		}
	}


	/* Event Handlers */

	pics.on('click', refHandler);
	navItem.on('click', menuItemHandler);

});
