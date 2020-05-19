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
		case 'economia': {
			echo $xml_to_json->Parse("https://www.em.com.br/rss/noticia/economia/rss.xml");
			break;
		}
		case 'educacao': {
			echo $xml_to_json->Parse("https://www.em.com.br/rss/noticia/especiais/educacao/rss.xml");
			break;
		}
		case 'gerais': {
			echo $xml_to_json->Parse("https://www.em.com.br/rss/noticia/gerais/rss.xml");
			break;
		}
		case 'internacional': {
			echo $xml_to_json->Parse("https://www.em.com.br/rss/noticia/internacional/rss.xml");
			break;
		}
		case 'nacional': {
			echo $xml_to_json->Parse("https://www.em.com.br/rss/noticia/nacional/rss.xml");
			break;
		}
		case 'tecnologia': {
			echo $xml_to_json->Parse("https://www.em.com.br/rss/noticia/tecnologia/rss.xml");
			break;
		}
	}
}

?>
