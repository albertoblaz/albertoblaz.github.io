$(function() {

	/* Vars */

	var TIME = 500;

	var pics = $('.ref-pic');
	var refs = $('.ref-block');


	/* Handlers */

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

	/*$('body').on('click', pics, refHandler);*/
	pics.on('click', refHandler);

});
