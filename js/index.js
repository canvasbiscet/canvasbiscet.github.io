var bars = document.querySelectorAll('span');

setInterval(function(){
	for(var i=0; i < bars.length; i++){
		var bar = bars[i];
		var height = Math.floor(Math.random()*100);
		bar.style.height = height+'%';
		
	}
}, 150);

