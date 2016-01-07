$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

smoothScroll.init();

// Make a Bit #1 div's height is equal to 4 of the left-side-morning events
$(window).on('resize', function(){
    var firstEntry = $('#entry3').height();
	var secondEntry = $('#entry4').height();
	var thirdEntry = $('#entry5').height();
	var forthEntry = $('#entry6').height();
	var margins = 4;

	$('#entry101').height(firstEntry + secondEntry + thirdEntry + forthEntry);
	$('#entry101 .schedule-entry-title').height(firstEntry + secondEntry + thirdEntry + forthEntry - 4 * margins)
});
$(window).trigger('resize');