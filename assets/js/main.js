var twitterLogo = document.getElementById('twitter');
twitter.addEventListener('click', function() {
  console.log('clicked!');
  window.open('https://twitter.com/talkabitconf');
});

var facebookLogo = document.getElementById('facebook');
facebookLogo.addEventListener('click', function() {
  window.open('https://www.facebook.com/talkabit/');
});

var callForSponsors = document.getElementById('call-sponsors');
callForSponsors.addEventListener('click', function() {
  window.open('assets/sponsorship.pdf');
});
