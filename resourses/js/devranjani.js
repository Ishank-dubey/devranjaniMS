(function(d){
	var elements = d.getElementsByClassName('down-arrow');
	if(elements){
		for (var i=0;i<elements.length;i++){
		elements[i].addEventListener('click',doit);	
		elements[i].addEventListener('keyup',function(e){
			if (e.keyCode == 13) {
			doit(e);
			}
		});	
		}
	}
	function doit(e){
		if(!e.target.classList.contains('transform-arrow')){
			expandfunction(true,e);
		}else{
			expandfunction(false,e);
		}
	}
	
	function expandfunction(expand, e){
		var display = 'block', ariaVal = true;
		if(!expand){
			ariaVal = false;
			display = 'none';
			e.target.classList.remove('transform-arrow');
		}else {
			e.target.classList.add('transform-arrow');
		}
		e.target.parentElement.nextElementSibling.style.display = display;
		e.target.setAttribute('aria-pressed',ariaVal);
		e.target.setAttribute('aria-expanded',ariaVal);
	}
	
})(document);