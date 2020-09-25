


// Get the modal
var modal = document.getElementById("myModal");
//Open the modal
function openModal() {
	//document.getElementById("myModal").style.display = "block";
	modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  //modal.style.display = "none";
  $(modal).fadeOut("slow");
}

// When the user clicks anywhere outside of the modal, close it
window.onmousedown = function(event) {
  if (event.target == modal) {
	$(modal).fadeOut("fast");
	//modal.style.display = "none";
  }
}

//Open different modals when differet portfolio items are clicked
var slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	//get all slides or portfolio items with name myslides and store into var slides
	var slides = document.getElementsByClassName("mySlides");
	
	//for next and previous button to move between slides
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	
	//make sure no slides or data displays while openning and closing different portfolio items
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	
	slides[slideIndex-1].style.display = "block";
	//console.log(slideIndex);
}


