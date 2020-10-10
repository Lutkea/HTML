$(function(){
    $('.btn-lg').click( function () {
        $(".btn-lg").parent().parent().toggle(5000); 
        $(this).closest('.btn-lg').parent().parent().toggle(5000);
    })
})