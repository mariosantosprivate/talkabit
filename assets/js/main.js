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
    var firstEntry = $('#entry2').height();
	var secondEntry = $('#entry3').height();
	var thirdEntry = $('#entry4').height();
	var fourthEntry = $('#entry5').height()/2;
	var margins = 4;

	$('#entry101').height(firstEntry + secondEntry + thirdEntry + fourthEntry);
	$('#entry101').css('margin-bottom',fourthEntry*1.5);
	$('#entry101 .schedule-entry-title').height(firstEntry + secondEntry + thirdEntry + fourthEntry*2)
});
$(window).trigger('resize');