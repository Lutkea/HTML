$(function() {
  $('a[role="button"]').click(function () { 
      $(this).parent().parent().children('.expande-texto').toggle(500)
  });
});
