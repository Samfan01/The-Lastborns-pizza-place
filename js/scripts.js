$(document).ready(function () {
    function Regular(size, crust, topping, extras, total) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.extras = extras;
        this.total = total;

    };
    Regular.prototype.Regularsize = function () {
        Regular.size == 500
        return 'Pizza Size'
    
    }
    Regular.prototype.Regularcrust = function () {
        Regular.crust===100
        return 'Pizza Crust'
        
    }
    Regular.prototype.Regulartopping = function () {
        Regular.topping == 100
        return 'Pizza topping'
    }
    Regular.prototype.Regularextras = function () {
        Regular.extras == 50
        return 'Pizza extra'
    }

    $('#take').click(function (event) {
        event.preventDefault()
        var pizzaSize = parseInt($('#sel1').val());
        var pizzaCrust = parseInt($('#crust1').val());
        var pizzaTopping = parseInt($('#topping1').val());
        var pizzaExtra = parseInt($('#extras1').val());
        var pizzaTotal = pizzaSize + pizzaCrust + pizzaTopping + pizzaExtra

        var newPizza = new Regular(pizzaSize, pizzaCrust, pizzaTopping, pizzaExtra)

        $('ul#list').append("<li><span class='contact'>" + newPizza.Regularsize() + " " + pizzaSize +
            '<br>' + newPizza.Regularcrust() + ' ' + pizzaCrust + '<br>' + newPizza.Regulartopping() + " "
            + pizzaTopping + '<br>' + newPizza.Regularextras() + " " + pizzaExtra + "<br>" + "Total:" + pizzaTotal + "</span></li>")


        $('.text').text( +pizzaTotal)
    })
    $('#take1').click(function () {
        var pizza1 = $('#sel2').val()



        $('.text').text(pizza1)
    });
    $('#take2').click(function () {
        $('form').show()
    })
    $('#sub').click(function(){
        var customer=$('#name').val()
        var home=$('#address').val()
        alert("Thank you "+customer+" your order will be delivered to "+home+" in a few minutes!")
    })



})













// var pizza=$('#sel1').val()
// var par=$('#parmesian').val()
// var ame=$('#american').val()
// var sof=$('#soft').val()
