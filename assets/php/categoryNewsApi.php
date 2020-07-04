<?php
	$opcao = isset($_GET['opcao']) ? $_GET['opcao'] : '';

	if (! empty($opcao)){
			$contents = file_get_contents('http://newsapi.org/v2/top-headlines?country=br&category='.$opcao.'&apiKey=56bbdc057c384409ab463d48f7925411');
			echo $contents;
	} else {
			echo('Nenhuma pesquisa informada');
	}
?>
