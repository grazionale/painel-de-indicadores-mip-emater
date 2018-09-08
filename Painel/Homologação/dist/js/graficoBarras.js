//Dividir o Json em Datas 0-30 dias 31-60 dias 61-150 dias
function gerarDadosPorFase(fase) {
    var dados = JSON.parse(localStorage.getItem("dados"));
    var dados_primeira_fase = []; d1 = 0;
    var dados_segunda_fase = []; d2 = 0;
    var dados_terceira_fase = []; d3 = 0;

    var aux_data = dados[0].samplePestSet[0].sampleDate;
    aux_data = aux_data.split("/");
    var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
    var data_final_primeira_fase = new Date();
    var data_final_segunda_fase = new Date();

    data_final_primeira_fase = addDays(data_inicial, 30);
    data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

    // console.log("Date Inicio: " + data_inicial);
    // console.log("Date final 1: " + data_final_primeira_fase);
    // console.log("Date final 2: " + data_final_segunda_fase);

    $.each(dados, function (analises, analise) {
        //console.log(analise);
        $.each(analise.samplePestSet, function (samplePestSet, samplePest) {
            //console.log(samplePest.sampleDate);
            var aux = samplePest.sampleDate;
            aux = aux.split("/");
            var data = new Date(aux[1] + "-" + aux[0] + "-" + aux[2]);

            if (data < data_final_primeira_fase) {
                //console.log(data + " - 1 Fase");
                dados_primeira_fase[d1] = samplePest;
                d1++;
            } else if (data > data_final_primeira_fase && data <= data_final_segunda_fase) {
                //console.log(data + " - 2 Fase");
                dados_segunda_fase[d2] = samplePest;
                d2++;
            } else {
                //console.log(data + " - 3 Fase");
                dados_terceira_fase[d3] = samplePest;
                d3++;
            }

        });
    });

    if (fase == "primeira") {
        return dados_primeira_fase;
    } else if (fase == "segunda") {
        return dados_segunda_fase;
    } else if (fase == "terceira") {
        return dados_terceira_fase;
    } else { }

}


//Geração de gráfico de barras referente a plantação de soja bt e não bt do estado do Paraná
function gerarDadosGraficoBarrasParana() {
    var primeira_fase = gerarDadosPorFase("primeira");
    var segunda_fase = gerarDadosPorFase("segunda");
    var terceira_fase = gerarDadosPorFase("terceira");
    var total_anticarsia_primeira_fase = 0; var num_anticaria_primeira_fase = 0;
    var total_chrysodeixis_primeira_fase = 0; var num_chrysodeixis_primeira_fase = 0;
    var total_spodoptera_primeira_fase = 0; var num_spodoptera_primeira_fase = 0;
    var total_heliothinae_primeira_fase = 0; var num_heliothinae_primeira_fase = 0;

    //Calculos referentes a primeira fase
    $.each(primeira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_primeira_fase = total_anticarsia_primeira_fase + samplePest.value;
            num_anticaria_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_primeira_fase = total_chrysodeixis_primeira_fase + samplePest.value;
            num_chrysodeixis_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_primeira_fase = total_spodoptera_primeira_fase + samplePest.value;
            num_spodoptera_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_primeira_fase = total_heliothinae_primeira_fase + samplePest.value;
            num_heliothinae_primeira_fase++;

        } else {

        }
    });

    //Calculos referentes a segunda fase
    var total_anticarsia_segunda_fase = 0; var num_anticaria_segunda_fase = 0;
    var total_chrysodeixis_segunda_fase = 0; var num_chrysodeixis_segunda_fase = 0;
    var total_spodoptera_segunda_fase = 0; var num_spodoptera_segunda_fase = 0;
    var total_heliothinae_segunda_fase = 0; var num_heliothinae_segunda_fase = 0;

    $.each(segunda_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_segunda_fase = total_anticarsia_segunda_fase + samplePest.value;
            num_anticaria_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_segunda_fase = total_chrysodeixis_segunda_fase + samplePest.value;
            num_chrysodeixis_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_segunda_fase = total_spodoptera_segunda_fase + samplePest.value;
            num_spodoptera_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_segunda_fase = total_heliothinae_segunda_fase + samplePest.value;
            num_heliothinae_segunda_fase++;

        } else {

        }
    });



    //Calculos referentes a terceira fase
    var total_anticarsia_terceira_fase = 0; var num_anticaria_terceira_fase = 0;
    var total_chrysodeixis_terceira_fase = 0; var num_chrysodeixis_terceira_fase = 0;
    var total_spodoptera_terceira_fase = 0; var num_spodoptera_terceira_fase = 0;
    var total_heliothinae_terceira_fase = 0; var num_heliothinae_terceira_fase = 0;

    $.each(terceira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_terceira_fase = total_anticarsia_terceira_fase + samplePest.value;
            num_anticaria_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_terceira_fase = total_chrysodeixis_terceira_fase + samplePest.value;
            num_chrysodeixis_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_terceira_fase = total_spodoptera_terceira_fase + samplePest.value;
            num_spodoptera_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_terceira_fase = total_heliothinae_terceira_fase + samplePest.value;
            num_heliothinae_terceira_fase++;

        } else {

        }
    });

    // console.log("Primeira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_primeira_fase + " | Num: " + num_anticaria_primeira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_primeira_fase + " |  Num: " + num_chrysodeixis_primeira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_primeira_fase + " | Num: " + num_spodoptera_primeira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_primeira_fase + " | Num: " + num_heliothinae_primeira_fase);

    // console.log("Segunda Fase");
    // console.log("Total Anticaris: " + total_anticarsia_segunda_fase + " | Num: " + num_anticaria_segunda_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_segunda_fase + " | Num: " + num_chrysodeixis_segunda_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_segunda_fase + " | Num: " + num_spodoptera_segunda_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_segunda_fase + " | Num: " + num_heliothinae_segunda_fase);

    // console.log("Terceira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_terceira_fase + " | Num: " + num_anticaria_terceira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_terceira_fase + " | Num: " + num_chrysodeixis_terceira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_terceira_fase + " | Num: " + num_spodoptera_terceira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_terceira_fase + " | Num: " + num_heliothinae_terceira_fase);


    //Calcular os valores em porcentagem
    //Primeira Fase
    var total_valores_primeira_fase = total_anticarsia_primeira_fase + total_chrysodeixis_primeira_fase + total_spodoptera_primeira_fase + total_heliothinae_primeira_fase;
    var porcentagem_anticarsia_primeira_fase = parseFloat((total_anticarsia_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_chrysodeixis_primeira_fase = parseFloat((total_chrysodeixis_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_spodoptera_primeira_fase = parseFloat((total_spodoptera_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_heliothinae_primeira_fase = parseFloat((total_heliothinae_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);

    //Segunda Fase
    var total_valores_segunda_fase = total_anticarsia_segunda_fase + total_chrysodeixis_segunda_fase + total_spodoptera_segunda_fase + total_heliothinae_segunda_fase;
    var porcentagem_anticarsia_segunda_fase = parseFloat((total_anticarsia_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_chrysodeixis_segunda_fase = parseFloat((total_chrysodeixis_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_spodoptera_segunda_fase = parseFloat((total_spodoptera_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_heliothinae_segunda_fase = parseFloat((total_heliothinae_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);


    //Terceira Fase
    var total_valores_terceira_fase = total_anticarsia_terceira_fase + total_chrysodeixis_terceira_fase + total_spodoptera_terceira_fase + total_heliothinae_terceira_fase;
    var porcentagem_anticarsia_terceira_fase = parseFloat((total_anticarsia_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_chrysodeixis_terceira_fase = parseFloat((total_chrysodeixis_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_spodoptera_terceira_fase = parseFloat((total_spodoptera_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_heliothinae_terceira_fase = parseFloat((total_heliothinae_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);

    // console.log("porcentagem primeira fase");
    // console.log(porcentagem_anticarsia_primeira_fase);
    // console.log(porcentagem_chrysodeixis_primeira_fase);
    // console.log(porcentagem_spodoptera_primeira_fase);
    // console.log(porcentagem_heliothinae_primeira_fase);
    // console.log("porcentagem segunda fase");
    // console.log(porcentagem_anticarsia_segunda_fase);
    // console.log(porcentagem_chrysodeixis_segunda_fase);
    // console.log(porcentagem_spodoptera_segunda_fase);
    // console.log(porcentagem_heliothinae_segunda_fase);
    // console.log("porcentagem terceira fase");
    // console.log(porcentagem_anticarsia_terceira_fase);
    // console.log(porcentagem_chrysodeixis_terceira_fase);
    // console.log(porcentagem_spodoptera_terceira_fase);
    // console.log(porcentagem_heliothinae_terceira_fase);


    //Gerar Gráfico de Barras Referente AO Paraná Soja Bt e Não Bt

    var objeto = [
        {
            "fase": "Primeira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_primeira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_primeira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_primeira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_primeira_fase
            }
        },
        {
            "fase": "Segunda",
            "anticarsia": {
                "valor": porcentagem_anticarsia_segunda_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_segunda_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_segunda_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_segunda_fase
            }
        },
        {
            "fase": "Terceira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_terceira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_terceira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_terceira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_terceira_fase
            }
        }
    ];

    //console.log(objeto);
    return objeto;

}


function gerarGraficoBarrasParana(){
    var valores = gerarDadosGraficoBarrasParana();

    //console.log(valores);

    var ctx = document.getElementById("bar-chart-grouped").getContext('2d');
    var myChart = new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["0-30", "30-60", "60-90 dias"],
      datasets: [
        {
          label: "Anticarsia gemmatalis",
          backgroundColor: "#1048A9",
          data: [valores[0].anticarsia.valor, valores[1].anticarsia.valor, valores[2].anticarsia.valor]
        }, {
          label: "Chrysodeixis includens",
          backgroundColor: "#A6120A",
          data: [valores[0].chrysodeixis.valor, valores[1].chrysodeixis.valor, valores[2].chrysodeixis.valor]
        },
        {
          label: "Spodoptera spp",
          backgroundColor: "#00B74A",
          data: [valores[0].spodoptera.valor, valores[1].spodoptera.valor, valores[2].spodoptera.valor]
        }, {
          label: "Grupo Heliothinae",
          backgroundColor: "#FFCB1E",
          data: [valores[0].heliothinae.valor, valores[1].heliothinae.valor, valores[2].heliothinae.valor]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Título',
        fontSize: 15
      },
      legend:{
        position: 'bottom',
        labels:{
          fontSize: 14,
        }
      },
      scales: {
        yAxes: [{
          ticks: {

            min: 0,
            max: 100,
            callback: function (value) { return value + "%" }
          },
          scaleLabel: {
            display: true,
            labelString: "Percentage"
          }
        }]
      }
    }
  });

}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}