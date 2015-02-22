

function abre_pagina(pagina) {
    // valida acesso restrito
    valida_acesso()

    render_loading();
    switch (pagina) {
        case "inicio":
            // carrega pagina
            $('#conteudo-principal').html(pagina_inicio());

            // inicializa com vazio
            $('#contem-lista-principal').html("");

            // renderiza li's
            for (i = 0; i < 40; i++) {
                $('#contem-lista-principal').append(
                        render_li(i, "http://lorempixel.com/42/42/people", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"));
            }

            fecha_loading();
            break;
    }

    $('.tab-item').removeClass('active');
    $("#btn-" + pagina).addClass('active');
}


function render_li(id, imagem, texto) {
    var li = '<li class="table-view-cell media">';
    li += '<img class="media-object pull-left" src="' + imagem + '" alt="">';
    li += '<div class="media-body">';
    li += '    <p>';
    li += texto;
    li += '    </p>';
    li += '</div>';
    li += '    <div class="content-padded">';
    li += '        <span class="icon icon-star pull-left btn-favorito" onclick="alert(' + id + ')"></span>';

    li += '    </div>';
    li += '</li>';

    return li;
}

function  render_loading() {
    $('#contem-loading').css("display", "block");
    $('#conteudo-principal').css("display", "none");
}

function  fecha_loading() {
    $('#contem-loading').css("display", "none");
    $('#conteudo-principal').css("display", "block");
}


function pagina_inicio() {
    var res = '<div class="card">';
    res += ' <ul class="table-view" id="contem-lista-principal">';
    res += '     <li class="table-view-cell media">';
    res += '         <div class="media-body">';
    res += '             <div class="texto-conteudo">';
    res += '                 Sem registros';
    res += '             </div>';
    res += '         </div>';
    res += '     </li>';
    res += ' </ul>';
    res += '</div>';

    return res;
}

function valida_acesso() {
    if (window.localStorage.getItem("token") === null) {
        window.location = "login.html";
    }
}


function auth() {
    var email = $("#email").val();
    var senha = $("#senha").val();

    if (email === senha) {
        window.localStorage.setItem("token", "teste");
        window.location = "index.html";
    } else {
        alert("erro");
    }



    return false;
}
