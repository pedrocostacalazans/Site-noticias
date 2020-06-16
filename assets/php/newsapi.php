<?php
	$contents = file_get_contents('http://newsapi.org/v2/top-headlines?country=br&apiKey=56bbdc057c384409ab463d48f7925411');
	echo $contents;
?>
