$(document).ready(function() {
	$(".host").click(function() {
		var name = $(".room_name").val();
		host_game('taiti',name,"/db/input.php");
	});

	$(".join").click(function() {

	});
});