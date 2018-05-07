$(document).ready(function() {
	$(".mobile-menu").on('click', function(){
        console.log('menu_toggled');
		$(".mobile-dropdown").slideToggle("fast");
	});
});

// function stext() {
//     var x = document.getElementById("pastLink");
//     var y = document.getElementById("currentLink");
//     x.style.color = 'red';
//     y.style.color = 'black';
// }


// var togByClass = document.getElementById('togClass');
// var addClassToDiv = document.getElementById("mobile");

// togByClass.addEventListener("click", function () {
//     toggleMenu();
// });

// function toggleMenu() {
//     console.log('toggled menu');
//     addClassToDiv.classList.toggle("mobile-menu");
//   }