(function(d, w){
	var div = d.getElementById("swipe"), ul = document.getElementById("sul");
	var startX;
	var oldLeft;
	var right;
	var isMousePressed;
	var currentPageNumber;
	var theWidth = div.offsetWidth;
	var allNavButtons = d.getElementsByClassName('swipe-button');
	var timerId;
	var timerIdWhenMoved;
	var resizeId;
	var defaultTImerId;
	var anchorStartX;
	var anchorEndX;
	var anchorSwipeFlag = false;
	
	  div.addEventListener("touchstart", handleStart, { capture: false, passive: true });
	  div.addEventListener("touchend", handleEnd, { capture: false, passive: true });
	  div.addEventListener("touchcancel", handleCancel, { capture: false, passive: true });
	  div.addEventListener("touchmove", handleMove, { capture: false, passive: true });
	  
	  div.addEventListener("mousedown", handleMouseDown, false);
	  div.addEventListener("mousemove", handleMouseMove, false);
	  div.addEventListener("mouseup", handleMouseUp, false);
	  div.addEventListener("mouseout", handleMouseOut, false);
	  
	  w.addEventListener('resize', function(){
		  if(resizeId){
			  clearTimeout(resizeId);
		  }
		  resizeId = setTimeout(function(){
			  theWidth = div.offsetWidth;
			  move(0);
			  
		  }, 200);
		  
	  });
	  addClickEvent();
	  attachAnchors();
	  
	  
	  
	  function removePresentFromAll() {
		  for(var i=0;i < allNavButtons.length;i++){
			  allNavButtons[i].classList.remove('present');
		  }
	  }
	  function preventClick(e) {
			  if(anchorSwipeFlag){
				  e.preventDefault();
			  }	  
	  }
	  function handleAnchorStart(evt){
		  if(evt.clientX){
			  anchorStartX = evt.clientX;
		  } else if(evt.touches && evt.touches.length){
			  anchorStartX = evt.touches[0].clientX;
		  } else {
			  anchorStartX =0;
		  }
	  }
	  function handleAnchorEnd(evt){
		  if(evt.clientX){
			  anchorEndX = evt.clientX;
		  } else if(evt.touches && evt.touches.length){
			  anchorEndX = evt.touches[0].clientX;
		  } else {
			  anchorEndX =0;
		  }
		    if(Math.abs(anchorStartX - anchorEndX) < 1 ){
	    		  anchorSwipeFlag = false;	  
	    	  }else {
	    		  anchorSwipeFlag = true;
	    	  }  
	  }
	  function attachAnchors() {
		  var anchors = document.getElementsByClassName("showanchor");
		  for(var i=0;i < anchors.length;i++){
			  var anchor = anchors[i];
			  anchor.addEventListener('click', preventClick);
			  
			  anchor.addEventListener('mousedown', handleAnchorStart);
              anchor.addEventListener('mouseup', handleAnchorEnd);
              
              anchor.addEventListener('touchstart', handleAnchorStart);
              anchor.addEventListener('touchend', handleAnchorEnd);
		  }
	  }
	  function addClickEvent() {
		  for(var i=0;i < allNavButtons.length;i++){
			  allNavButtons[i].addEventListener('click', navButtonClicked);
			 // allNavButtons[i].addEventListener('touchstart', navButtonClicked);
		  }
	  }
	  function navButtonClicked(e){
		  if(parseInt(e.target.innerText)){
			  move(-1*(parseInt(e.target.innerText) - 1) * theWidth);
			  manualInterventionStop();
		  }
		  e.stopPropagation();
	  }
	  
	  function handleStart(e) {
		  mouseDownTouchStart(e);
		  e.stopPropagation();
	  }
	  function handleEnd(e) {
		  endFunction();
		  e.stopPropagation();
	  }
	  function handleCancel(e) {
		  e.preventDefault();
	  }
	  function handleMove(e) {
		  mouseMoveTouchMove(e);
		  e.stopPropagation();
	  }
	  
	  function handleMouseMove(e) {
		  mouseMoveTouchMove(e);
	  }
	  
	  function handleMouseDown(e) {
		  mouseDownTouchStart(e);
	  }
	  function handleMouseUp(e) {
		  endFunction(e);
	  }
	  function handleMouseOut(e) {
		  if(isMousePressed){
				endFunction();
			}
		isMousePressed = false;
	  }
	  function manualInterventionStop(){
		  stop();
			if(timerIdWhenMoved)
			clearTimeout(timerIdWhenMoved);
			
			timerIdWhenMoved = setTimeout(start, 5000);
	  }
	  
	  function mouseMoveTouchMove(e){
			if(isMousePressed){
				var newD = e.clientX;
				if(!newD && e.touches[0] && e.touches[0].clientX ){
					newD = e.touches[0].clientX;	
				}
				var distance = newD - startX;
				distance > 0 ? right=true : right = false;
				var newLeft = parseInt(oldLeft.replace('px', '')) + distance;
				ul.style.left = newLeft+'px';
				manualInterventionStop();
			}
		}
	
		
		
		
		function doneMoving(){
			currentPageNumber = (Math.abs(ul.style.left.replace('px','')/div.offsetWidth));
			removePresentFromAll();
			allNavButtons[currentPageNumber].classList.add('present');
		}
		function mouseDownTouchStart(e){
			startX = e.clientX || e.touches[0].clientX;
			oldLeft = !ul.style.left ? '0px' : ul.style.left;
			isMousePressed = true;
			ul.classList.remove('animate');
		}
		function endFunction(){
			isMousePressed = false;
			var newLeft = ul.style.left.replace('px','');
			if(newLeft> 0){
				move(0);
				return;
			}
			var fullWidthSize = div.offsetWidth;
			var halfWidth = fullWidthSize/10;
			var mod = Math.abs(newLeft%fullWidthSize);
			if(mod < halfWidth){
				newLeft = parseInt(newLeft) + parseInt(mod);
			}else{
				if(!right){
					newLeft = parseFloat(newLeft) + parseFloat(mod - fullWidthSize);
				}else{
					newLeft = parseFloat(newLeft) + parseFloat(mod);
				}
			}
			if(Math.abs(newLeft) >= ul.offsetWidth){
				newLeft = -1*(ul.offsetWidth - div.offsetWidth);
			}
			move(newLeft);
		}
		function move(posX){
			ul.classList.add('animate');
			setTimeout(function(){
				ul.style.left = posX+'px';
				doneMoving();
			},0);
		}
		function start() {
			timerId = setInterval(function(){
				var whereTo; 
				if(currentPageNumber >= 3){
					whereTo = 0;
				}else {
					whereTo = ++currentPageNumber;
				}
				move(-1*(whereTo) * theWidth);
			}, 6000);
		}
		function stop() {
			if(defaultTImerId)
			clearTimeout(defaultTImerId);	
			if(timerId)
			clearInterval(timerId);
		}
		defaultTImerId = setTimeout(function(){
			move(-1 * theWidth);	
		}, 2000);
		
		start();
	
})(document, window)
