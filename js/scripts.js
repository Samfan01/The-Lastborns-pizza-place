var order = [];


$(document).ready(function () {
    function Regular(size, crust, topping, extras, total) {
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.extras = extras;
        this.total = total;

    };
    Regular.prototype.Regularsize = function () {
        if (this.size == 500) {
            return 'Small';
        }
        if (this.size == 700) {
            return 'Medium';
        }
        if (this.size == 900) {
            return 'Large';
        }

    }
    Regular.prototype.Regularcrust = function () {
        if (this.crust == 100) {
            return 'American';
        }
        if (this.crust == 200) {
            return 'Parmesian';
        }
        if (this.crust == 150) {
            return 'Soft';
        }

    }
    Regular.prototype.Regulartopping = function () {
        if (this.topping == 200) {
            return 'Chicken';
        }
        if (this.topping == 150) {
            return 'Beef';
        }
        if (this.topping == 100) {
            return 'Bacon';
        }
    }
    Regular.prototype.Regularextras = function () {
        if (this.extras == 100) {
            return 'Extra-Meat';
        }
        if (this.extras == 50) {
            return 'Extra-Cheese';
        }
        if (this.extras == 60) {
            return 'Extra-Sauce';
        }
    }
$('#take').click(function (event) {
    event.preventDefault()
    var pizzaSize = parseInt($('#sel1').val());
    var pizzaCrust = parseInt($('#crust1').val());
    var pizzaTopping = parseInt($('#topping1').val());
    var pizzaExtra = parseInt($('#extras1').val());
    var pizzaTotal = parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaTopping) + parseInt(pizzaExtra);

    var newPizza = new Regular(pizzaSize, pizzaCrust, pizzaTopping, pizzaExtra);
    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount = + order[i].pizzaTotal;
    }
    $('ul#list').append("<li><span class='contact'>" + newPizza.Regularsize() + " " + pizzaSize +
        '<br>' + newPizza.Regularcrust() + ' ' + pizzaCrust + '<br>' + newPizza.Regulartopping() + " "
        + pizzaTopping + '<br>' + newPizza.Regularextras() + " " + pizzaExtra + "<br>" + "Total:" + pizzaTotal + '<br>' +
        'Total Amount ' + totalAmount + "</span></li>")
});
function Veggy(size, crust, extras) {
    this.size = size;
    this.crust = crust;
    this.extras = extras;
}
Veggy.prototype.Veggysize = function () {
    if (this.size == 400) {
        return 'Small';
    }
    if (this.size == 550) {
        return 'Medium';
    }
    if (this.size == 700) {
        return 'Large';
    }
}
Veggy.prototype.Veggycrust = function () {
    if (this.crust == 100) {
        return 'American';
    }
    if (this.crust == 200) {
        return 'Parmesian';
    }
    if (this.crust == 150) {
        return 'Soft';
    }
}
Veggy.prototype.Veggyextras = function () {
    if (this.extras == 100) {
        return 'Extra-Olives';
    }
    if (this.extras == 50) {
        return 'Extra-Cheese';
    }
    if (this.extras == 60) {
        return 'Extra-Sauce';
    }

}
$('#take1').click(function () {
    var pizzaSize1 = parseInt($('#sel2').val());
    var pizzaCrust1 = parseInt($('#crust2').val());
    var pizzaExtra1 = parseInt($('#extra1').val());
    var pizzaTotal1 = pizzaSize1 + pizzaCrust1 + pizzaExtra1

    var newPizza1 = new Veggy(pizzaSize1, pizzaCrust1, pizzaExtra1)

    $('ul#list').append("<li><span class='contact'>" + newPizza1.Veggysize() + " " + pizzaSize1 +
        '<br>' + newPizza1.Veggycrust() + ' ' + pizzaCrust1 + '<br>' + newPizza1.Veggyextras() + " " + pizzaExtra1 + "<br>" + "Total:" + pizzaTotal1 +
        '<br>' + 'Total Amount ' + totalAmount + "</span></li>")
    alert(pizzaSize1)

});
$('#take2').click(function () {
    $('form').show()
})
$('#sub').click(function () {
    var customer = $('#name').val()
    var home = $('#address').val()
    alert("Thank you " + customer + " your order will be delivered to " + home + " in a few minutes!")
})

});















// var pizza=$('#sel1').val()
// var par=$('#parmesian').val()
// var ame=$('#american').val()
// var sof=$('#soft').val()
