$(document).ready(function(){

	$('.slick').slick({
		slidesToShow:1
	})

	let menu = document.querySelector('.header__nav-list');
	let button = document.querySelector('.header__nav-icon');
	let header = document.querySelector('.header__nav');
	let body = document.querySelector('.body');

	button.onclick = function() {
		menu.classList.toggle('_active');
		button.classList.toggle('_active');
		header.classList.toggle('header__nav_right');
		body.classList.toggle('lock');
	};

});

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
	document.querySelector('.body').classList.add('lock');
}
function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
	document.querySelector('.body').classList.remove('lock');
}