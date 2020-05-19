<?php

/*
 * https://www.em.com.br/rss/
 */

require_once 'XmlToJson.class.php';

$opcao = isset($_GET['opcao']) ? $_GET['opcao'] : '';

$xml_to_json = new XmlToJson;

if (! empty($opcao)){
	switch ($opcao)
	{
		case 'brasil': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/brasil/rss.xml");
			break;
		}
		case 'mundo': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/mundo/rss.xml");
			break;
		}
		case 'cultura': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/eu-estudante/cultura/rss.xml");
			break;
		}
		case 'educacao_profissional': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/eu-estudante/ensino_educacaoprofissional/rss.xml");
			break;
		}
		case 'ensino_superior': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/eu-estudante/ensino_ensinosuperior/rss.xml");
			break;
		}
		case 'pos_graduacao': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/eu-estudante/ensino_posgraduacao/rss.xml");
			break;
		}
		case 'tecnologia': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/tecnologia/rss.xml");
			break;
		}
		case 'turismo': {
			echo $xml_to_json->Parse("http://www.correiobraziliense.com.br/rss/noticia/turismo/rss.xml");
			break;
		}
	}
}

?>
