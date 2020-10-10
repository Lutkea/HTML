$(function(){
    $(function(){
        modificarCampos(true)
        $('#firstName').change(function() {
            if($(this).val().length > 0){
                modificarCampos(false)
            }
            else{
                modificarCampos(true)
            }
        });
    })
    function modificarCampos(param){
        $('.form-control[id!=firstName], .custom-select, .custom-control-input').attr('disabled', param)
    }
});