
$(document).ready(function(){
$('#take').click(function(){
    var reg=$('#regular').val()
    var med=$('#medium').val()
    var lar=$('#large').val()
    var par=$('#parmesian').val()
    var ame=$('#american').val()
    var sof=$('#soft').val()
    var plus=parseInt(reg)
    var plus1=parseInt(sof)
    
    $('.text').text(plus)
})




})