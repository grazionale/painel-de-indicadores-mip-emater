function loadJson(){
    var api_url = "https://elika.com.br/dados2.json";
    var dados = [];

    $.ajax({
        url: api_url,
        type: "get",
        data: dados, 
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            localStorage.setItem("dados", JSON.stringify(data));
            //console.log(localStorage.getItem("dados"));
        },
        error: function () {
            msg.text("Erro ao fazer requisição");
        }
    });
}