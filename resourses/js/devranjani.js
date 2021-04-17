(function(d){
	var container = d.getElementById('container');
    
	var trumpet = document.createElement("span");
	trumpet.innerHTML = "&#127930;";
    trumpet.classList.add('trumpet', 'go');
    
    var guitar = document.createElement("span");
    guitar.innerHTML = "&#127928;";
    guitar.classList.add('guitar', 'go');
    
    var keyboard = document.createElement("span");
    keyboard.innerHTML = '&#127929;';
    keyboard.classList.add('keyboard', 'go');
    
    var note = document.createElement("span");
    note.innerHTML = '&#127925;';
    note.classList.add('note', 'go');
    
    var drum = document.createElement("span");
    drum.innerHTML = '&#129345;';
    drum.classList.add('drum', 'go');
    
    var violin = document.createElement("span");
    violin.innerHTML = '&#127931;';
    violin.classList.add('violin', 'go');
    
    container.appendChild(trumpet);
    container.appendChild(guitar);
    container.appendChild(keyboard);
    container.appendChild(note);
    container.appendChild(drum);
    container.appendChild(violin);
    
    setTimeout(function(){  
    	trumpet.parentNode.removeChild(trumpet);
        guitar.parentNode.removeChild(guitar);
        keyboard.parentNode.removeChild(keyboard);
        note.parentNode.removeChild(note);
        drum.parentNode.removeChild(drum);
        violin.parentNode.removeChild(violin); 
    }, 30*1000);
    
    var next_slide = document.getElementsByClassName('next-slide')[0];
    var timerId;
    if(next_slide) {
    	next_slide.addEventListener('click', function () {
    		animateAndChange('https://scontent.fdel17-1.fna.fbcdn.net/v/t31.18172-8/1598568_588345161253611_1402758850_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ObxI9O1AM1wAX-WO_l_&_nc_ht=scontent.fdel17-1.fna&oh=e279866569c77ec026d6454936574395&oe=60A1839F');
    	});
    }
    function animateAndChange(src) {
    	var larger_photo = document.getElementsByClassName('larger-photo')[0];
		larger_photo.style.opacity = "0.0";
		if(timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(function(){
    		larger_photo.style.opacity = "1.0";
    		larger_photo.setAttribute('src', src);
    	}, 500);
    }
    var gallery_images = document.getElementsByClassName('gallery-image')[0];
    if(gallery_images){
    	gallery_images.addEventListener('click', function(){
    		document.getElementsByClassName('larger-photo-container')[0].style.display = 'block';
    	});
    }
    var menu_icon_slide = document.getElementsByClassName('menu-icon-slide')[0];
    if(menu_icon_slide){
    	menu_icon_slide.addEventListener('click', function(){
    		popOver();
    	});
    }
    function popOver() {
    	document.getElementsByClassName('larger-photo-container')[0].style.display = 'none';
    }
    
})(document);