$(function () {
    var api_url = "https://my.api.mockaroo.com/api-mip-emater.json?key=28573910";
    var dados = [];


    // Implementação 1: Retorna Array dados

    $.ajax({
        url: api_url,
        type: "get",
        data: dados, // N sei pra que que serve... parece ser atoa.
        dataType: 'json',
        success: function (data) {
            let arr = $.map(data, function (el) {
                console.log(el);
                return el;
            })
        },
        error: function () {
            msg.text("Erro ao fazer requisição");
        }
    });



    // Implementação 2: Retorna Objeto
    /*
    $.getJSON(api_url, {
        format: "json"
    })
    .done(function(data){
        console.log(data);
    }) 
    */
});



