$(function(){
    $('a[role="button"]').click(function (){
        $('nav').toggleClass('fixed-top').toggleClass('fixed-bottom')
    })
})