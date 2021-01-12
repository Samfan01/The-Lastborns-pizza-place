
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
    var pizza=$('#sel1').val()
    if(pizza===reg){
        par=100
        
    }
    $('.text').text(reg+par)
})
$('#take2').click(function(){
    $('form').show()
})



})