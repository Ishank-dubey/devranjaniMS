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
    
})(document);