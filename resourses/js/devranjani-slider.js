(function(d){
	var prev = d.getElementById('prev'), next = d.getElementById('next');
	prev.addEventListener('click',function(){
		plusSlides(-1);
	});
	prev.addEventListener('keyup',function(e){
		if (e.keyCode == 13) {
		plusSlides(-1);
		}
	});
	next.addEventListener('click',function(){
		plusSlides(1);
	});
	next.addEventListener('keyup',function(e){
		if (e.keyCode == 13) {
		plusSlides(-1);
		}
	});
	var spans = d.getElementsByClassName('dot');
	for(let i=0;i<spans.length;i++){
		spans[i].addEventListener('click',function(){
			currentSlide(i+1);
		})
	}
	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none"; 
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block"; 
	  dots[slideIndex-1].className += " active";
	}
	setInterval(function (){
		plusSlides(1);
	}, 8000);
})(document);
