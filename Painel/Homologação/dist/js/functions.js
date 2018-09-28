/*
Filtro por Ano
    Recebe o primeiro Ano da safra, exemplo: Safra de 2017 a 2018, 
    a função deve receber o 2017 como parâmetro (inteiro) e no final, 
    irá retornar um Objeto com as análises da safra de 2017 à 2018.
*/
function filterByAno(ano, dados){

    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }
    var cont = 0;
    var i = 0;
    var new_data = [];

    $.each(data, function(analises, analise){
        
        ano_a = analise.surveyField.dateData.sowedDate;
        ano_a = ano_a.split('/');
        ano_a = parseInt(ano_a[2]);
        ano_b = ano_a + 1;

        if(ano == ano_a || ano == ano_b){
            new_data[i] = analise;
            cont++;
            i++;
        } 
    });

    if(cont == 0){
        alert("Safra não encontrada no ano selecionado");
    }
    
    return new_data;

}
//Retorna o primeiro ano de uma Safra, exemplo: Safra de 2017 à 2018, a função irá retornar um inteiro com valor de 2017
function prepare_ano(valor){
    return valor.split('/')[0];
}


function filterByNorte(dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);
    var i = 0;
    var norte = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.city.region.macroRegion.name).toUpperCase() === ("noRTe").toUpperCase()){
            norte[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Região norte não encontrada");
    }

    //console.log(norte);
    return norte;
}

function filterByNoroeste(dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);
    var i = 0;
    var noroeste = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.city.region.macroRegion.name).toUpperCase() === ("noroeste").toUpperCase()){
            noroeste[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Região noroeste não encontrada");
    }

    //console.log(noroeste);
    return noroeste;
}

function filterByRegion(){
    var data = JSON.parse(localStorage.getItem("dados"));
    console.log(data);
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

    console.log(regioes);
    return regioes;

}









// Testes
filterByAno(prepare_ano($( "#ano-da-safra" ).val()), ""); //Está funcionando

//filterByRegion();

filterByNorte();
filterByNoroeste();