var req = {
	'type':'',
	'gamemode':'',
	'name':''
}

var cards = [
	[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],
	[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],
	[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],
	[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12]
];

function randomString(l) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < l; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function host_game(gamemode,name,link) {
	if (name == '') {name = randomString(10);}
	var local_req = req;
	local_req['type'] = 'host';
	local_req['gamemode'] = gamemode;
	local_req['name'] = name;
	console.log('host_game ran');
	$.ajax({
	  url: link,
	  type: 'POST',
	  dataType: "json",
	  data: local_req,
	  success: function(data) {alert(data);}
	});
	console.log('ajax');
	return;
}

function deal_hand(players,hand,card_arr) {
	var remade_arr = [];
	var current_hand;
	var card_index;
	for (var i = 0;i < players;i += 1) {
		current_hand = [];
		for (var j = 0;j < hand;j += 1) {
			card_index = getRndInteger(0,card_arr.length);
			current_hand.push(card_arr[card_index]);
			card_arr.splice(card_index,1);
		}
		remade_arr.push(current_hand);
	}
	remade_arr.push(card_arr);
	return remade_arr;
}