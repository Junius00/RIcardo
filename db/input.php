<?php
	header("Access-Control-Allow-Origin: *");
	$gamemode = $_POST['gamemode'];
	$name = $_POST['name'];
	file_put_contents(
		"$gamemode/$name.json",
		"{
			'players':[],
			'eck':'ok'
		}");
	echo 'ok';
?>