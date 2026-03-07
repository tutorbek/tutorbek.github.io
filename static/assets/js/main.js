var header = document.querySelector('header');
var body = document.body;
var progressBar = document.querySelector('.progress-bar .bar');

if (progressBar) {
	function scrollIndicator() {
		var pixelScrolled = window.scrollY;
		var viewportHeight = window.innerHeight;
		var totalHeightScrollable = body.scrollHeight;
		var pixelsToPercentage =
			(pixelScrolled / (totalHeightScrollable - viewportHeight)) * 100;
		progressBar.style.width = pixelsToPercentage + '%';
	}
}

function headerInteraction() {
	if (!header) return;
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > 0) {
		header.classList.add('show-bg');
	} else {
		header.classList.remove('show-bg');
	}
}

headerInteraction();

window.addEventListener('scroll', function () {
	headerInteraction();
	if (progressBar) scrollIndicator();
});
