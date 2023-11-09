
// Simple parallax effect for the website header
document.addEventListener('scroll', function(e) {
  var parallaxHeader = document.querySelector('header');
  var scrolled = window.scrollY;
  parallaxHeader.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});
