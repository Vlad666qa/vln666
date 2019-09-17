jQuery( document ).ready(function($) {
	var flag = false;
    $('.hamburger').on('click', function(){
		if ( flag === false ) {
			$('.header__inner').css({'left':'0'});
			flag = true;
		} else {
			$('.header__inner').css({'left':'-300px'});
			flag = false;
		}
	});
});