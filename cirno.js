function checkCirno(){
	$('img').each(function(){
		if($(this).attr('img') != 'http://img1.wikia.nocookie.net/__cb20121029014127/betterbleachfanfiction/images/4/4c/Cirno-nee.600.1201483.jpg'){
			$(this).attr('src', 'http://img1.wikia.nocookie.net/__cb20121029014127/betterbleachfanfiction/images/4/4c/Cirno-nee.600.1201483.jpg');
		}
	});
	$('*').each(function(){
		$(this).css('background-image', 'url(http://img1.wikia.nocookie.net/__cb20121029014127/betterbleachfanfiction/images/4/4c/Cirno-nee.600.1201483.jpg)');
	});
}
$(document).ready(function(){
	checkCirno();
	setInterval(checkCage, 500);
})
