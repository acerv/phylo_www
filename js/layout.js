$(function() {

	$('#messagecontainer div').click(function() {
		$(this).hide('fast');
	});
	
	// autofocus to form field
	$(':text.autofocus:first').trigger('focus');

});

;(function($) {

	$.fn.extend({
		popup: function() {
			$(this).bind('click',function(e) {
				window.open( 'http://www.babypanda.fi/index.php/'+$(this).attr('href'),"_new","status=1,toolbar=0,width=970,height=700,scrollbars=1");
				e.preventDefault();
			});
		}
	});
	
	$.fn.extend({
		popupExternal: function() {
			$(this).bind('click',function(e) {
				window.open( $(this).attr('href'),"_new","status=1,toolbar=0,width=816,height=816,scrollbars=1");
				e.preventDefault();
			});
		}
	});	
		
})(jQuery);


$(function() {

	$('a[rel*="popup"]').popup();
	$('a[rel*="image-popup"]').popupExternal();

	$('.popup-close').click(function(e) {
		if(window.opener && !window.opener.closed) {
			e.preventDefault();
			window.close();
			window.opener.location.reload();
		}
	});

	if($("div.hide-layout").length>0 && $("#header").length>0) { 
		$('#header,#left,#footer,.backbutton').hide();
		$('div.backbutton-popup').show();
	}
	
});
