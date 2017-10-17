$('#clock').countdown('2018/01/20 10:00:00')
.on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span>%w</span> weeks '
    + '<span>%d</span> days '
    + '<span>%H</span> hr '
    + '<span>%M</span> min '
    + '<span>%S</span> sec'));
});