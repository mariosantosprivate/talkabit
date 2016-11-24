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

var ring = document.getElementById('ring');

var toggle = false;
function rotateRing() {
  if(toggle = !toggle)
    ring.style.transform = 'rotate(360deg)';
  else
    ring.style.transform = 'rotate(0deg)';
}

setTimeout(rotateRing, 0);
setInterval(rotateRing, 5000);
