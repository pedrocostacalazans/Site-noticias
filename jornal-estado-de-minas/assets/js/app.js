/*
// AJAX com jquery

// Para que seja síncrono e execute as instruções na sequência
$.ajaxSetup({
	async: false
});

function obterEconomia() {
	$.getJSON('assets/php/XmlToJson.php?opcao=economia', {}, function(response){
		construir(response);
	});
}

function obterEducacao() {
	$.getJSON('assets/php/XmlToJson.php?opcao=educacao', {}, function(response){
		construir(response);
	});
}

function obterGerais() {
	$.getJSON('assets/php/XmlToJson.php?opcao=gerais', {}, function(response){
		construir(response);
	});
}

function obterInternacional() {
	$.getJSON('assets/php/XmlToJson.php?opcao=internacional', {}, function(response){
		construir(response);
	});
}

function obterNacional() {
	$.getJSON('assets/php/XmlToJson.php?opcao=nacional', {}, function(response){
		construir(response);
	});
}
function obterTecnologia() {
	$.getJSON('assets/php/XmlToJson.php?opcao=tecnologia', {}, function(response){
		construir(response);
	});
}

// AJAX com XMLHttpRequest
getJSON = url => {
	// Exemplo de requisição GET
	var ajax = new XMLHttpRequest();

	// Seta tipo de requisição e URL com os parâmetros
	ajax.open("GET", url, true);

	// Envia a requisição
	ajax.send();

	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = () => {
		// Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			var data = ajax.responseText;
			// Retorno do Ajax
			construir(JSON.parse(data));
		}
	}
}
*/

// Na tela mobile recolher o menu ao clicar no item
$(() => {
	var navMain = $('#menu');

	$('a').on('click', (e) => {
		var a = e.currentTarget;
		if (a.parentNode.getAttribute('class') != 'nav-item active') {
			var tag_li = document.getElementsByClassName('nav-item active')[0];
			tag_li.setAttribute('class', 'nav-item');
			a.parentNode.setAttribute('class', 'nav-item active');
		}
		navMain.collapse('hide');
	});
});

// AJAX com API fetch

getJSON = url => {
	fetch(url)
	.then(response => {
		response.json().then(data => {
			construir(data);
		});
	})
	.catch(err => {
		console.error('Failed retrieving information', err);
	});
}

obterEconomia = () => {
	getJSON('assets/php/XmlToJson.php?opcao=economia');
}

obterEducacao = () => {
	getJSON('assets/php/XmlToJson.php?opcao=educacao');
}

obterGerais = () => {
	getJSON("assets/php/XmlToJson.php?opcao=gerais");
}

obterInternacional = () => {
	getJSON('assets/php/XmlToJson.php?opcao=internacional');
}

obterNacional = () => {
	getJSON('assets/php/XmlToJson.php?opcao=nacional');
}

obterTecnologia = () => {
	getJSON('assets/php/XmlToJson.php?opcao=tecnologia');
}

construir = obj => {

	var html = '';
	$('.container').html('');

	for(var i = 0; i < obj.channel.item.length; i++ ) {

		html = '<div class="row border">';
		html += '<div class="col-sm-4">';
		try {
			html += '<img class="img-fluid img-thumbnail" src="'+obj.channel.item[i].enclosure.attributes.url+'" alt="Card image cap">';
		}
		catch (e) {
			html += '<img class="img-fluid img-thumbnail" src="../assets/img/png/sem_img.png" alt="Card image cap">';
		}
		finally {
			html += '</div>';
			html += '<div class="col-sm-8">';
			html += '<p class="category"><strong>'+obj.channel.title+'</strong></p>';
			html += '<p><h3 class="title">'+obj.channel.item[i].title+'</h3></p>';
			html += '<p class="pubdate"><mark>'+obj.channel.item[i].pubDate+'</mark></p>';
			if ( obj.channel.item[i].subtitle != undefined ) {
				html += '<p class="lead subtitle">'+obj.channel.item[i].subtitle+'</p>';
			}
			html += '<p><a class="continuelendo" href="'+obj.channel.item[i].link+'"><em>Continue lendo...</em></a></p>';
			html += '</div>';
			html += '</div>';
			html += '<hr style="height: 5px; border: none; color: #7A7879; background-color: #7A7879;">';
		}
		$('.container').append(html);
	}

}
