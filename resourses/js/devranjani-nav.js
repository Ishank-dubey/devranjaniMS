(function(){
	/*var styletotest = "content";

	if (styletotest in document.getElementsByClassName('nav-image')[0].style)
	{
	    

	} else {

	     

	}*/
	  function toggleView(){
		  document.getElementsByClassName('devranjani-menu-one')[0].classList.toggle('rotate');
		  document.getElementsByClassName('devranjani-menu-three')[0].classList.toggle('rotate');
		  document.getElementsByClassName('devranjani-menu-two')[0].classList.toggle('hide');
		  var items = document.getElementsByClassName('menu-items');
		  for(var count = 0;count<items.length; count++){
			  items[count].classList.toggle('height-zeroed');
		  } 
	  }
	  document.getElementsByClassName('menu-icon')[0].addEventListener('click', function(e) {
		  toggleView();
	      e.stopPropagation();
	});
	  document.getElementsByTagName("BODY")[0].addEventListener('click',function(){
		  if(document.getElementsByClassName('devranjani-menu-one')[0].classList.contains('rotate'))
		  toggleView();
	  });
})();

