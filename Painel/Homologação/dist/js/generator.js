
// $(function () {
//     var api_url = "https://elika.com.br/dados.json";
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



// function buscaRegiao(){
//     var api_url = "https://elika.com.br/dados.json";
//     var dados = [];

//     var norte = []; var nt = 0;
//     var noroeste = []; var ne = 0;
//     var sul = []; var sl = 0;
//     var sudoeste = []; so = 0;
//     var oeste = []; oe = 0;

//     $.ajax({
//         url: api_url,
//         type: "get",
//         data: dados, // N sei pra que que serve... parece ser atoa.
//         dataType: 'json',
//         success: function (data) {
//             $.each(data, function(i, item) {
//                 //alert(item.surveyField.field.city.region.macroRegion.name);
//                 if(item.surveyField.field.city.region.macroRegion.name == "Texas"){
//                     texas[i] = item;
//                     i++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Norte"){
//                     norte[nt] = item;
//                     nt++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Noroeste"){
//                     noroeste[ne] = item;
//                     ne++;
//                 } 
                
//                 if(item.surveyField.field.city.region.macroRegion.name == "Sul"){
//                     sul[sl] = item;
//                     sl++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Sudoeste"){
//                     sudoeste[so] = item;
//                     so++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Oeste"){
//                     oeste[oe] = item;
//                     oe++;
//                 }
//             });
//             return data;
//         },
//         error: function () {
//             msg.text("Erro ao fazer requisição");
//         }

        
//     });

// }



function buscarTipoSoja(){
    
    var sojaBt = []; var bt = 0;
    var sojaNBt = []; var nbt = 0;
    var data = JSON.parse(localStorage.getItem("dados"));
    
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

function buscarSojaNBt(data){
    var sojaNBt = []; var nbt = 0;

    $.each(data, function(i, item) {
        if(item.surveyField.questionData.bt == false){
            sojaNBt[nbt] = item;
            nbt++;
        } 
    });
    //console.log("Soja Bt:");
    //console.log(sojaBt);

    return sojaNBt;

}

function buscarLagartas(data){
    var anticarsia = []; var a = 0;
    var chrysodeixis = []; var c = 0;
    var spodoptera = []; var s = 0;
    var heliothinae = []; var h = 0;
    var lagartas = [];

    $.each(data, function(i, item) {
        //console.log(item.samplePestSet);
        $.each(item.samplePestSet, function(p, pest){
            //console.log(pest.pest.scientificName);
            if(pest.pest.scientificName == "Anticarsia gemmatalis"){
                anticarsia[a] = pest;  
                a++;
                //console.log("Achou Anticarsia");
            } 
            if (pest.pest.scientificName == "Chrysodeixis includens") {
                chrysodeixis[c] = pest;
                c++;
                //console.log("Achou Chrysodeixis");
            } 
            if (pest.pest.scientificName == "Spodoptera spp") {
                spodoptera[s] = pest;
                s++;
                //console.log("Achou Spodoptera");
            } 
            if (pest.pest.scientificName == "Grupo Heliothinae") {
                heliothinae[h] = pest;
                h++;
                //console.log("Achou heliothinae");
            }
        });

        lagartas[0] = anticarsia;
        lagartas[1] = chrysodeixis;
        lagartas[2] = spodoptera;
        lagartas[3] = heliothinae;

        //console.log(lagartas);

    });
    // console.log(anticarsia);
    // console.log(chrysodeixis);
    // console.log(spodoptera);
    // console.log(heliothinae);

    return lagartas;

}

function buscarPorRegiao(data){
    var norte = []; var n = 0;
    var noroeste = []; var no = 0;
    var sul = []; var s = 0;
    var sudoeste = []; var se = 0;
    var oeste = []; var oe = 0;
    var regioes = [];

    $.each(data, function(i, item) {
        //console.log(item.samplePestSet);

        if(item.surveyField.field.city.region.macroRegion.name == "NORTE"){
            norte[n] = item;
            n++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "NOROESTE"){
            noroeste[no] = item;
            no++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "SUL"){
            sul[s] = item;
            s++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "SUDOESTE"){
            sudoeste[se] = item;
            se++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "OESTE"){
            oeste[oe] = item;
            oe++;
        } else {}

        regioes[0] = norte;
        regioes[1] = noroeste;
        regioes[2] = sul;
        regioes[3] = sudoeste;
        regioes[4] = oeste;

    });

    return regioes;

}

function gerarGraficoPizzaDistribuicaoPercentualParana(regiao, sojabt){
   
    var valor_anticarsia = 0;
    var valor_chrysodeixis = 0;
    var valor_spodoptera = 0;
    var valor_heliothinae = 0;
    
    var num_anticarsia = 0;
    var num_chrysodeixis = 0;
    var num_spodoptera = 0;
    var num_heliothinae = 0;

    var media_anticarsia = 0;
    var media_chrysodeixis = 0;
    var media_spodoptera = 0;
    var media_heliothinae = 0;
    
    if(regiao == "Paraná" || regiao == "PR"){
        if(sojabt){
            
        } else {
            var sojabt_data = buscarSojaNBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas = buscarLagartas(sojabt_data);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            console.log("Media total: " + total_media);
            console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("pie-chart").getContext('2d');
            var myChart = new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        }
    } else if (regiao == "Norte"){
        if(sojabt){

        } else {
            var sojanbt_data = buscarSojaNBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas_regioes = buscarPorRegiao(sojanbt_data);
            var lagartas = buscarLagartas(lagartas_regioes[0]);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            console.log("Media total: " + total_media);
            console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("pie-chart").getContext('2d');
            var myChart = new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        }
    } else if(regiao == "Noroeste"){
        if(sojabt){

        } else {
            
        }
    } else if(regiao == "Sul"){
        if(sojabt){

        } else {
            
        }
    } else if(regiao == "Sudoeste"){
        if(sojabt){

        } else {
            var sojanbt_data = buscarSojaNBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas_regioes = buscarPorRegiao(sojanbt_data);
            var lagartas = buscarLagartas(lagartas_regioes[3]);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            console.log("Media total: " + total_media);
            console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("pie-chart").getContext('2d');
            var myChart = new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        }
    } else {
        if(sojabt){

        } else {
            
        }
    }
}

function loadJson(){
    var api_url = "https://elika.com.br/dados.json";
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


$(function(){
    loadJson();
    //console.log(buscarSojaBt());
    gerarGraficoPizzaDistribuicaoPercentualParana("Paraná", false);
    //gerarGraficoPizzaDistribuicaoPercentualParana("Norte", false);
    //gerarGraficoPizzaDistribuicaoPercentualParana("Sudoeste", false);
    
    //console.log(JSON.parse(localStorage.getItem("dados")));
    //buscarTipoSoja();
});

