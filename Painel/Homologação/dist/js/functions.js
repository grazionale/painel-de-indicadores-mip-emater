//Dividir o Json em Datas 0-30 dias 31-60 dias 61-150 dias
//Parâmetros: "primeira", "segunda", ou "terceira", além de passar ou não o objeto dados
function generateDataFase(fase, dados) {
    if (dados == "" || dados == null) {
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    var dados_primeira_fase = []; d1 = 0;
    var dados_segunda_fase = []; d2 = 0;
    var dados_terceira_fase = []; d3 = 0;

    //var aux_data = data[0].samplePestSet[0].sampleDate;
    //aux_data = aux_data.split("/");
    //var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
    var data_final_primeira_fase = new Date();
    var data_final_segunda_fase = new Date();

    //data_final_primeira_fase = addDays(data_inicial, 30);
    //data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

    // console.log("Date Inicio: " + data_inicial);
    // console.log("Date final 1: " + data_final_primeira_fase);
    // console.log("Date final 2: " + data_final_segunda_fase);

    $.each(data, function (analises, analise) {
        //console.log(analise);
        var aux_data = analise.samplePestSet[0].sampleDate;
        aux_data = aux_data.split("/");
        var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
        data_final_primeira_fase = addDays(data_inicial, 30);
        data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

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

    // console.log("Primeira Fase");
    // console.log(dados_primeira_fase);
    // console.log("Segunda Fase");
    // console.log(dados_segunda_fase);
    // console.log("Terceira Fase");
    // console.log(dados_terceira_fase);
    if (fase == "primeira") {
        return dados_primeira_fase;
    } else if (fase == "segunda") {
        return dados_segunda_fase;
    } else if (fase == "terceira") {
        return dados_terceira_fase;
    } else { }

}
