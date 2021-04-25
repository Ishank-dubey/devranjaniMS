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
    		popOverOpenClose(true);
    	});
    }
    var menu_icon_slide = document.getElementsByClassName('menu-icon-slide')[0];
    if(menu_icon_slide){
    	menu_icon_slide.addEventListener('click', function(){
    		popOverOpenClose();
    	});
    }
    function popOverOpenClose(open) {
    	if(open){
    		insertPopOverInDOM('https://scontent.fdel17-1.fna.fbcdn.net/v/t1.6435-9/83341420_2829718553782916_624269102722056192_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=bCiQj_lIEAIAX8F65Ew&_nc_ht=scontent.fdel17-1.fna&oh=634acdf4cfb3f96e23744a4f956b30c3&oe=609EF223', 
    				'Devi Sarasvati Devi Sarasvati Devi Sarasvati Devi Sarasvati Devi Sarasvati Devi Sarasvati ');
    	}else {
    		var larger_photo_container = document.getElementsByClassName('larger-photo-container')[0];
    		if(larger_photo_container){
    			larger_photo_container.parentNode.removeChild(larger_photo_container);
    		}
    	}
    	
    	
    	
    }
    slideAnimation();
    function slideAnimation() {
    	var slides = d.getElementsByClassName('club-icon');	
    	if(slides && slides[0] && isInViewport(slides[0])){
    		setToGeneric(10, slides[0], 'slide-extreme');
    	}
        if(slides && slides[1] && isInViewport(slides[1])){
        	setToGeneric(10, slides[1], 'slide-extreme');
    	}
        if(slides && slides[2] && isInViewport(slides[2])){
        	setToGeneric(10, slides[2], 'slide-extreme');
       }
    }
    d.addEventListener('scroll', function () {
    	slideAnimation();
    }, {
        passive: true
    });
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
        		rect.top + 50 < window.innerHeight && rect.bottom >= 0

        );
    }

    function setToGeneric(ms, node, className){
    	if(node)
    	setTimeout(function(){  node.classList.remove(className);}, ms);
    }
    function insertPopOverInDOM (src, text) {
    	var container = document.getElementById('container');
    	var lcon = document.createElement("div");  
    	lcon.classList.add('larger-photo-container');
    	lcon.setAttribute('tabindex', 0);
    	
    	container.insertBefore(lcon, container.childNodes[0]);
    	
    	var bundle = document.createElement("div");  
    	bundle.classList.add('bundle');
    	lcon.appendChild(bundle);
    	
    	var next = document.createElement("button");
    	next.classList.add('next-slide');
    	next.innerHTML = '&#10095;';
    	
    	
    	var back = document.createElement("button");
    	back.classList.add('back-slide');
    	back.innerHTML = '&#10094;';
    	
    	
    	var p = document.createElement("p");
    	p.classList.add('img-description-common', 'img-p-top');
    	bundle.appendChild(p);
    	
    	var button = document.createElement('button');
    	button.classList.add('menu-icon-slide');
    	p.appendChild(button);
    	
    	var span1 = document.createElement('span');
    	span1.classList.add('devranjani-menu-one-slide', 'rotate');
    	button.appendChild(span1);
    	
    	
    	var span2 = document.createElement('span');
    	span2.classList.add('devranjani-menu-three-slide', 'rotate');
    	button.appendChild(span2);
    	
    	bundle.appendChild(back);
    	bundle.appendChild(next);
    	
    	var img = document.createElement('img');
    	img.classList.add('larger-photo');
    	img.setAttribute('src', src);
    	
    	bundle.appendChild(img);
    	
    	var p2 = document.createElement('p');
    	p2.classList.add('img-description-common', 'img-p-bottom');
    	p2.textContent = text;
    	
    	bundle.appendChild(p2);
    	button.focus();
    	
    	next.addEventListener('click', function() {
    		animateAndChange('https://scontent.fdel17-1.fna.fbcdn.net/v/t31.18172-8/1598568_588345161253611_1402758850_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ObxI9O1AM1wAX-WO_l_&_nc_ht=scontent.fdel17-1.fna&oh=e279866569c77ec026d6454936574395&oe=60A1839F');
    	});
    	button.addEventListener('click', function() {
    		popOverOpenClose();
    	});
    	lcon.addEventListener('keyup', function(e) {
    		if(e.keyCode === 27) {
    			popOverOpenClose();
    		} else if (e.keyCode === 39){
    			animateAndChange('https://scontent.fdel17-1.fna.fbcdn.net/v/t1.6435-9/83341420_2829718553782916_624269102722056192_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=bCiQj_lIEAIAX8F65Ew&_nc_ht=scontent.fdel17-1.fna&oh=634acdf4cfb3f96e23744a4f956b30c3&oe=609EF223');
    		} else if(e.keyCode === 37) {
    			animateAndChange('https://scontent.fdel17-1.fna.fbcdn.net/v/t31.18172-8/1598568_588345161253611_1402758850_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ObxI9O1AM1wAX-WO_l_&_nc_ht=scontent.fdel17-1.fna&oh=e279866569c77ec026d6454936574395&oe=60A1839F');
    		}
    	});
    }
    
})(document);