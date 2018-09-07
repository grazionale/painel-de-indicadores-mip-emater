
// $(function () {
//     var api_url = "https://my.api.mockaroo.com/api-mip-emater.json?key=28573910";
//     var dados = [];


//     // Implementação 1: Retorna Array dados

//     $.ajax({
//         url: api_url,
//         type: "get",
//         data: dados, // N sei pra que que serve... parece ser atoa.
//         dataType: 'json',
//         success: function (data) {
//             dados = data;
            
//             let arr = $.map(data, function (el) {
//                 //
//                 return el;
//             })

//             //console.log(data);
//         },
//         error: function () {
//             msg.text("Erro ao fazer requisição");
//         }

        
//     });



//     // Implementação 2: Retorna Objeto
//     /*
//     $.getJSON(api_url, {
//         format: "json"
//     })
//     .done(function(data){
//         console.log(data);
//     }) 
//     */



// });



function buscaRegiao(){
    var api_url = "https://my.api.mockaroo.com/api-mip-emater.json?key=28573910";
    var dados = [];

    var texas = []; var i = 0;
    var norte = []; var nt = 0;
    var noroeste = []; var ne = 0;
    var sul = []; var sl = 0;
    var sudoeste = []; so = 0;
    var oeste = []; oe = 0;

    $.ajax({
        url: api_url,
        type: "get",
        data: dados, // N sei pra que que serve... parece ser atoa.
        dataType: 'json',
        success: function (data) {
            $.each(data, function(i, item) {
                //alert(item.surveyField.field.city.region.macroRegion.name);
                if(item.surveyField.field.city.region.macroRegion.name == "Texas"){
                    texas[i] = item;
                    i++;
                } 

                if(item.surveyField.field.city.region.macroRegion.name == "Norte"){
                    norte[nt] = item;
                    nt++;
                } 

                if(item.surveyField.field.city.region.macroRegion.name == "Noroeste"){
                    norte[ne] = item;
                    ne++;
                } 
                
                if(item.surveyField.field.city.region.macroRegion.name == "Sul"){
                    norte[sl] = item;
                    sl++;
                } 

                if(item.surveyField.field.city.region.macroRegion.name == "Sudoeste"){
                    norte[so] = item;
                    so++;
                } 

                if(item.surveyField.field.city.region.macroRegion.name == "Oeste"){
                    norte[oe] = item;
                    oe++;
                }
            });
            console.log("Texas: ");
            console.log(texas);


            return data;
        },
        error: function () {
            msg.text("Erro ao fazer requisição");
        }

        
    });

}



function buscarTipoSoja(){
    var api_url = "https://my.api.mockaroo.com/api-mip-emater.json?key=28573910";
    var dados = [];
    var sojaBt = []; var bt = 0;
    var sojaNBt = []; var nbt = 0;
    $.ajax({
        url: api_url,
        type: "get",
        data: dados, 
        dataType: 'json',
        success: function (data) {
            $.each(data, function(i, item) {
                //alert(item.surveyField.field.city.region.macroRegion.name);

                if(item.surveyField.questionData.bt == true){
                    sojaBt[bt] = item;
                    bt++;
                } else {
                    sojaNBt[nbt] = item;
                    nbt++;
                }
            });
            console.log("Soja Bt:");
            console.log(sojaBt);

            console.log("Soja não Bt:");
            console.log(sojaNBt);

        },
        error: function () {
            msg.text("Erro ao fazer requisição");
        }

        
    });

}




function buscarSojaBt(data){
    var sojaBt = []; var bt = 0;

    $.each(data, function(i, item) {
        if(item.surveyField.questionData.bt == true){
            sojaBt[bt] = item;
            bt++;
        } 
    });
    //console.log("Soja Bt:");
    //console.log(sojaBt);

    return sojaBt;

}


function buscarLagartaAnticarsia(data){
    var anticarsia = []; var i = 0;

    $.each(data, function(i, item) {
        //console.log(item.samplePestSet);
        $.each(item.samplePestSet, function(p, pest){
            //console.log(pest.pest.scientificName);
            if(pest.pest.scientificName == "Anticarsia gemmatalis"){
                anticarsia = pest;  
                console.log("Achou 1");
            } else {
                console.log("Achou nada");
            }
        });

        // if(item.samplePestSet[1].pest.id == 1){
        //     anticarsia[i] = item;
        //     i++;
        // } 
    });

    return anticarsia;

}


function gerarGraficoPizzaDistribuicaoPercentual(){
    var api_url = "https://my.api.mockaroo.com/api-mip-emater.json?key=28573910";
    var dados = [];

    $.ajax({
        url: api_url,
        type: "get",
        data: dados, 
        dataType: 'json',
        success: function (data) {

            var anticarsia = buscarLagartaAnticarsia(data);
            //console.log(anticarsia);
            // $.each(data, function(i, item) {

            // });
        },
        error: function () {
            msg.text("Erro ao fazer requisição");
        }

        
    });
}




$(function(){
    //buscaRegiao();
    //buscarTipoSoja();

    //console.log(buscarSojaBt());
    gerarGraficoPizzaDistribuicaoPercentual();
});

