$(function(){
    
    $(".col-lg-4").fadeTo(1000, 0.5);

    $("main").hide();

    $("form > input").change(function() {
        if ($(this).val() == "mostrar") {
            $("main").show();
        } else {
            $("main").hide();
        }
    });

    $(".col-lg-4").mouseenter(function() {
        $(this).fadeTo(1000, 1);
    });

    $(".col-lg-4").mouseleave(function() {
        $(this).fadeTo(1000, 0.5);

    });

    $("main").hide();

    $("form > input").change(function() {
        if ($(this).val() == "mostrar") {
            $("main").show();
        } else {
            $("main").hide();
        }
    });
});