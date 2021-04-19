

// Função que trata o evento de click no botão 'OK'.
$("#qtd-input").click(function() {

    $("#qtd-input").desabled = true;
    
    // Retorna para a variável qtd o valor digitado no campo com id='campos-qtd'.
    var qtd = $("#campos-qtd").val();

    // Verifica se o valor é menor que 2 ou maior que 20.
    // Se for ele mostra uma mensagem de erro e retorna -1 como erro.
    if (qtd < 2 || qtd > 20) {
        $(document).ready(function() {
            $("#hidden-content").fancybox().trigger('click');
          });

        return -1;
    }

    // Troca a visibilidade da div com id='seg-p' para 'visible'.
    $("#seg-p").css("visibility", "visible");

    // Gera elementos do tipo input de forma dinâmica de acordo com o valor qtd
    // inserido.
    for (var i = 0; i < qtd; i++) {
        
        $("#seg-p").append('<input type="number" class="value-fields" id="value-fields">');
    }

    // Gera dois button para realizar a soma ou subtração.
    $("#seg-p").append('<button class="btn-soma"> Realizar soma </button>');
    $("#seg-p").append('<button class="btn-subtracao"> Realizar subtração </button>');

});


// Função que trata o evento de click no botão 'Realizar soma'.
// A entrada são os campos input com id='value-fields'.
// O resultado é exibido no output de id='result'.
$("div.segundo-passo").on("click", "button.btn-soma", function () {

    // Pega os elementos com id='value-fields' gerados dinamicamente.
    var obj_list = $("input[id=value-fields]");
    var total = 0;


    // Para cada elemento com id='value-fields' ele pega o valor inserido e
    // soma com o valor da variável total;
    $(obj_list).each(function(i, obj) {

        var value = obj.value;
        total = add(total, value);
    })

    // Troca a visibilidade da div com id='resultado' para 'visible'.
    $("#resultado").css("visibility", "visible");
    // Retorna o valor do total para o elemento output com id='result'.
    $("#result").val(total);

});


// Função que trata o evento de click no botão 'Realizar subtração'.
// A entrada são os campos input com id='value-fields'.
// O resultado é exibido no output de id='result'.
$("div.segundo-passo").on("click", "button.btn-subtracao", function () {

    // Pega os elementos com id='value-fields' gerados dinamicamente.
    var obj_list = $("input[id=value-fields]");

    var total = obj_list[0].value;
    var aux = obj_list[0].value;
    obj_list[0].value = 0;

    // Para cada elemento com id='value-fields' ele pega o valor inserido e
    // subtrai da variável total;
    $(obj_list).each(function(i, obj) {

        var value = obj.value;
        total = sub(total, value);
    })

    obj_list[0].value = aux;
    // Troca a visibilidade da div com id='resultado' para 'visible'.
    $("#resultado").css("visibility", "visible");
    // Retorna o valor do total para o elemento output com id='result'.
    $("#result").val(total);

});


// Função de adição entre 2 termos
function add(total, value)
{
    var value = parseInt(value);
    var result = total + value;
    return result;
}


// Função de subtração entre 2 termos
function sub(total, value)
{
    var value = parseInt(value);
    var result = total - value;
    return result;
}