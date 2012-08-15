/*
document.addEventListener('touchmove', function(event) {
	tx = event.targetTouches[0].clientX;
	ty = event.targetTouches[0].clientY;

	$("#player").css("left", tx);
	$("#player").css("top", ty);
});
*/
var player = $("#player");

var InputManager = {

	move: function(event){
		oevent = event.originalEvent;
		oevent.preventDefault();
		tx = oevent.targetTouches[0].clientX;
		ty = oevent.targetTouches[0].clientY;

		player.css("left", tx);
		player.css("top", ty);
	}

}

$(document).ready(function(){
	$(document).bind("touchmove", InputManager.move);
});
