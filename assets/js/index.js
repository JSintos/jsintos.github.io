const topButton = document.getElementById("topButton");

window.onscroll = function () {
	displayButton();
};

function displayButton() {
	if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
		topButton.style.display = "block";
	} else {
		topButton.style.display = "none";
	}
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

topButton.addEventListener("click", scrollToTop);
