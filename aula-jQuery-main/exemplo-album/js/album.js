$(function() {
    //alert("Oi");

    //Seleção por elemento
    //$("button").hide();

    //Seleção por ID
    //$("#spanHide").hide();

    //Seleção por classe
    //$(".text-to-hide").hide();

    //Seleção de elementos com determinado atributo
    //$("div[class!='container']").hide();

    //Seleção de filhos
    //$("div > div > input").hide();

    //Evento
    /*$(".text-to-hide").dblclick(function() {
        
    });*/

    //Método para modificar HTML
    //$("span").html("<p>MUDEI</p>");

    //Método para modificar o texto do elemento
    //$("span").text("MUDEI");

    //Método para modificar o valor do elemento
    //$("input").val("Olá");

    //Métodos para resgatar valores de text, html e val - não passar nada no parâmetro
    //$("span").html();
    //$("span").text();
    //$("input").val();

    /*Método para esconder elemento
    $("#openPanel").click(function() {
        $(".text-to-hide").hide(5000);

    });

    Método para mostrar elemento
    $("#closePanel").click(function() {
        $(".text-to-hide").show(5000);

    })*/

    /*Método para esmaecer elemento
    $("#openPanel").click(function() {
        $(".col-md-4").fadeIn(5000);

    });

    Método para esmaecer elemento
    $("#closePanel").click(function() {
        $(".col-md-4").fadeOut(5000);

    })*/

    /*
    $(".col-md-4").fadeTo(10, 0.3);

    //Quando o mouse fica em cima do elemento, opacidade 1
    $(".col-md-4").mouseover(function() {
        $(this).fadeTo(10, 1);
    });

    //Quando mouse sai do elemento, a opacidade fica em 0.3
    $(".col-md-4").mouseleave(function() {
        $(this).fadeTo(10, 0.3);
    });*/

    //EXEMPLOS DE ANIMATION
    $("#openPanel").mouseover(function() {
        $(this).animate({
            width: '+=30px',
            height: '+=10px'
        });
    });

    $("#openPanel").mouseleave(function() {
        $(this).animate({
            width: '-=30px',
            height: '-=10px'
        });
    });

    $(".col-md-4").mouseenter(function() {
        $(this).animate({
            left: '+=30px',
            top: '+=10px'
        });
    });

    $(".col-md-4").mouseleave(function() {
        $(this).animate({
            left: '-=30px',
            top: '-=10px'
        });
    });

    /*Exemplo de slide
    $(".card-body").slideUp();

    $("svg").click(function() {
        //$(this.parentElement.lastElementChild).slideToggle();
        $(this.nextElementSibling).slideToggle();
    });*/
});