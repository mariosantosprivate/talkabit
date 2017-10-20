$('#countdown').countdown('2018/01/20 10:00:00')
.on('update.countdown', function(event) {
	$(this).find('.counter.weeks .value').text(event.offset.weeks);
	$(this).find('.counter.days .value').text(event.offset.days);
	$(this).find('.counter.hours .value').text(event.offset.hours);
	$(this).find('.counter.minutes .value').text(event.offset.minutes);
	$(this).find('.counter.seconds .value').text(event.offset.seconds);
  // var $this = $(this).html(event.strftime(''
  //   + '<span>%w</span> weeks '
  //   + '<span>%d</span> days '
  //   + '<span>%H</span> hr '
  //   + '<span>%M</span> min '
  //   + '<span>%S</span> sec'));
});
