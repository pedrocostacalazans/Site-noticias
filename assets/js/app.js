var firstSlideCarousel,
    secondSlideCarousel,
    thirdSlideCarousel,
    titulo,
    form,
    paragrafo = undefined;

container = (json) => {

    let html = "",
        i = [0, 0, 0],
        cont = 0;

    for (let index in json.articles) {
        if (json.articles[index].source.name == 'Globo') {
            if (cont == 4) break;
            i[cont] = index;
            cont++;
        }
    }

    firstSlideCarousel.attr('src', json.articles[i[0]].urlToImage);
    titulo[0].innerHTML = '<a href="' + json.articles[i[0]].url + '">' + json.articles[i[0]].title + '</a>';
    secondSlideCarousel.attr('src', json.articles[i[1]].urlToImage);
    titulo[1].innerHTML = '<a href="' + json.articles[i[1]].url + '">' + json.articles[i[1]].title + '</a>';
    thirdSlideCarousel.attr('src', json.articles[i[2]].urlToImage);
    titulo[2].innerHTML = '<a href="' + json.articles[i[2]].url + '">' + json.articles[i[2]].title + '</a>';

    html = `
    <%for (let index in obj.articles) {%>
        <p><strong><%=obj.articles[index].publishedAt%></strong></p>
        <p><h5><strong><a href="<%=obj.articles[index].url%>"><%=obj.articles[index].title%></a></strong></h5></p>
        <%if(obj.articles[index].urlToImage != null){%>
            <img src="<%=obj.articles[index].urlToImage%>" class="rounded float-left" width=50% alt="Imagem não pode ser exibida">
        <%} else {%>
            <img src="assets/img/png/sem_img.png" class="rounded float-left" width=50% alt="Card image cap">
        <%}%>
        <%if(obj.articles[index].description != "" || obj.articles[index].description != null){%>
            <p><%=obj.articles[index].description%></p>
        <%} else {%>
            <p><%=obj.articles[index].content%></p>
        <%}%>
        <div style="clear:both;">
        <hr> 
    <%}%>
    `;

    $("#container").append(ejs.render(html, { obj: json }));
};

aside = (json) => {

    let html = "";

    html = `
    <%for (let index = 0; index < 6; index++) {%>
        <p><strong><%=obj.articles[index].publishedAt%></strong></p>
        <p><h5><strong><a href="<%=obj.articles[index].url%>"><%=obj.articles[index].title%></a></strong></h5></p>
        <%if(obj.articles[index].urlToImage != null){%>
            <img src="<%=obj.articles[index].urlToImage%>" class="rounded float-left" width=50% alt="Card image cap">
        <%} else {%>
            <img src="assets/img/png/sem_img.png" class="rounded float-left" alt="Card image cap">
        <%}%>
        <%if(obj.articles[index].description != "" || obj.articles[index].description != null){%>
            <p><%=obj.articles[index].description%></p>
        <%} else {%>
            <p><%=obj.articles[index].content%></p>
        <%}%>
        <div style="clear:both;">
        <hr>
    <%}%>
`;
    $("#aside").append(ejs.render(html, { obj: json }));
};

searchNews = (json) => {
    let html = '';
    if (json.totalResults != 0) {
        html = `
    <h3 style="color: blue;"><strong><i>Pesquise acima &uArr; <br>Resultado será exibido abaixo</i></strong></h3>
    <%for (let index in obj.articles) {%>
        <%if(obj.articles[index].urlToImage != null){%>
            <img src="<%=obj.articles[index].urlToImage%>" class="rounded float-left" width=50% alt="Card image cap">
        <%} else {%>
            <img src="assets/img/png/sem_img.png" class="rounded float-left" alt="Card image cap">
        <%}%>
        <p><h6><strong><a href="<%=obj.articles[index].url%>"><%=obj.articles[index].title%></a></strong></h6></p>
        <div style="clear:both;">
    <%}%>
    `;
        $("#aside2").html(ejs.render(html, { obj: json }));
    } else {
        alert('Nenhum resultado para a pesquisa');
    }
}

getJson = (url, conteudo) => {
    fetch(url)
        .then((response) => {
            response.json().then((data) => {
                switch (conteudo) {
                    case 'callContainer':
                        container(data);
                        break;
                    case 'callAside':
                        aside(data);
                        break;
                    case 'pesquisar':
                        searchNews(data);
                        break;
                }
            });
        })
        .catch((err) => {
            console.error("Failed retrieving information", err);
        });
}

$(() => {
    firstSlideCarousel = $('.first-slide');
    secondSlideCarousel = $('.second-slide');
    thirdSlideCarousel = $('.third-slide');
    titulo = document.getElementsByClassName('titulo');
    paragrafo = document.getElementsByClassName('paragrafo');

    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        getJson('assets/php/searchNewsApi.php?opcao=' + $('#search').val(), 'pesquisar');
    });

    getJson('assets/php/newsapi.php', 'callContainer');
    getJson('assets/php/techNewsApi.php', 'callAside');
    $("#aside2").html('<h3 style="color: blue;"><strong><i>Pesquise acima &uArr; <br>Resultado será exibido abaixo</i></strong></h3>');
});
