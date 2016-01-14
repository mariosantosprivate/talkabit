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
	// Setting heigh of the description of the Make a Bit #1 entry so that the vertical blue line has the proper height
	$('#entry101 .schedule-entry-title').height(firstEntry + secondEntry + thirdEntry + fourthEntry*2)

	// in mobile we want Make a Bit #1 height to be equal do Make a Bit#2
	if($(window).width() < 768){
		$('#entry101').css('margin-bottom',0);
		$('#entry101').height( $('#entry102').height() );
		$('#entry101 .schedule-entry-title').height( $('#entry102 .schedule-entry-title').height());
	}
});
$(window).trigger('resize');

// Switching between a plus and a minus sign when the user wants to collapse a schedule entry
$( ".schedule li a" ).bind( "click", function() {
  var i = $(this).find("i");
  if(i.hasClass("ion-android-add-circle")){
  	i.removeClass();
  	i.addClass("ion-android-remove-circle");
  }
  else{
  	i.removeClass();
  	i.addClass("ion-android-add-circle");
  }

  // This should have been enough :(
  //i.toggleClass("ion-plus-circle");
  //i.toggleClass("ion-minus-circled");
});