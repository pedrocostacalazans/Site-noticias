<!DOCTYPE html>
<html lang="pt-br">

<head>
	<!-- Meta tags -->
	<meta charset="utf-8" />
	<title>4Real</title>
	<meta name="author" content="" />
	<meta name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

	<!-- <link rel="shortcut icon" href="assets/img/favicon/favicon.png"> -->

	<link rel="stylesheet" href="assets/lib/bootstrap/css/bootstrap.min.css" />
	<!-- Estilos customizados para esse template -->
	<link rel="stylesheet" href="assets/css/estilos.css">
	<script src="assets/lib/bootstrap/js/jquery-3.3.1.slim.min.js"></script>
	<script src="assets/lib/ejs.min.js"></script>
	<script src="assets/lib/routie.min.js"></script>
	<script src="assets/js/app.js"></script>

</head>

<body>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: rgb(52, 111, 158);">
			<a class="navbar-brand" href="#"><b><i>4Real</i></b></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
				aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="input-group mr-sm-2" style="width: 200px;">
				<select class="custom-select" id="categorias" style="display: inline;">
					<option value="geral" selected>Geral</option>
					<option value="negocios">Negócios</option>
					<option value="entretenimento">Entretenimento</option>
					<option value="saude">Saúde</option>
					<option value="ciencia">Ciência</option>
					<option value="esporte">Esporte</option>
				</select>
			</div>			
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" href="#">Ajuda</a>
					</li>
				</ul>
				<div class="input-group mr-sm-2" style="width: 200px;">
					<select class="custom-select" id="regSearch" style="display: inline;">
						<option selected>Pesquisas feitas...</option>
					</select>
				</div>
				<form class="form-inline mt-2 mt-md-0">
					<input id="search" class="form-control mr-sm-2" type="text" placeholder="Pesquisar"
						aria-label="Search" required/>
					<button class="btn btn btn-success my-2 my-sm-0" type="submit">
						Pesquisar
					</button>
				</form>
			</div>
		</nav>
	</header>

	<!--<main role="main">-->

	<div class="row justify-content-center">
		<div class="col-sm-7">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="first-slide" src="" alt="First slide">
						<div class="container">
							<div class="carousel-caption text-left transparency">
								<h3 class="titulo"></h3>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img class="second-slide" src="" alt="Second slide">
						<div class="container">
							<div class="carousel-caption text-left transparency">
								<h3 class="titulo"></h3>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<img class="third-slide" src="" alt="Third slide">
						<div class="container">
							<div class="carousel-caption text-left transparency">
								<h3 class="titulo"></h3>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Voltar</span>
				</a>
				<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Avançar</span>
				</a>
			</div>
		</div>
		<div id="aside2" class="col-sm-4" style="margin-left: 2%;"></div>
	</div>

	<div class="row justify-content-center">
		
		<div id="container" class="col-sm-7"></div>
		
		<div id="aside" class="col-sm-4">
			<h3 style="color: blue;"><strong><i>Tecnologia</i></strong></h3>
		</div>
	</div>

	<script src="assets/lib/bootstrap/js/popper.min.js"></script>
	<script src="assets/lib/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
