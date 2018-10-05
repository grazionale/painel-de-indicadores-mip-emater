function gerarCanvasGraficoPizza(dados) {
    //console.log(dados);
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

    var lagartas = buscarLagartas(dados);
    var cont = 0;

    $.each(lagartas, function (lagarta, tipo) {
        $.each(tipo, function (items, i) {
            if (cont == 0) {
                valor_anticarsia = valor_anticarsia + i.value;
                num_anticarsia++;
            } else if (cont == 1) {
                valor_chrysodeixis = valor_chrysodeixis + i.value;
                num_chrysodeixis++;
            } else if (cont == 2) {
                valor_spodoptera = valor_spodoptera + i.value;
                num_spodoptera++;
            } else {
                valor_heliothinae = valor_heliothinae + i.value;
                num_heliothinae++;
            }
        });
        cont++;
    });

    media_anticarsia = (valor_anticarsia / num_anticarsia);
    media_chrysodeixis = (valor_chrysodeixis / num_chrysodeixis);
    media_spodoptera = (valor_spodoptera / num_spodoptera);
    media_heliothinae = (valor_heliothinae / num_heliothinae);

    var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;

    var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
    var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
    var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
    var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


    var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

    // console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
    // console.log(valor_chrysodeixis + " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
    // console.log(valor_spodoptera + " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
    // console.log(valor_heliothinae + " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
    // console.log("Media total: " + total_media);
    // console.log("Porcentagem total: " + porcentagem_total);

    
    var ctx = document.getElementById("canvas-generator-graph-pizza").getContext('2d');
    var myChart = new Chart(document.getElementById("canvas-generator-graph-pizza"), {
        type: 'doughnut',
        data: {
            labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
            datasets: [{
                label: "Paraná",
                backgroundColor: ["#C10250", "#03BCBF", "#D3D945", "#FCB040"],
                data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Titulo',
                fontSize: 15
            },
            legend: {
                position: 'left',
                labels: {
                    fontSize: 14,
                }
            }
        }
    });



}

function gerarCanvasGraficoBarras() {

}

function checarTodasRegioes(){
    if($('#regiao-todas-safra').is(':checked')){ 
        $( "#regiao-norte-safra" ).prop( "checked", true );
        $( "#regiao-noroeste-safra" ).prop( "checked", true );
        $( "#regiao-sul-safra" ).prop( "checked", true );
        $( "#regiao-sudoeste-safra" ).prop( "checked", true );
        $( "#regiao-oeste-safra" ).prop( "checked", true );
    } else {
        $( "#regiao-norte-safra" ).prop( "checked", false );
        $( "#regiao-noroeste-safra" ).prop( "checked", false );
        $( "#regiao-sul-safra" ).prop( "checked", false );
        $( "#regiao-sudoeste-safra" ).prop( "checked", false );
        $( "#regiao-oeste-safra" ).prop( "checked", false );
    }
}

//Retorna dados filtrados a partir do filtro (front-end) que o usuário escolher.
function filtrar(){
    var ano_safra = $("#ano-da-safra").val();

    if($('#regiao-norte-safra').is(':checked')){ var norte = 1;} else{ var norte = 0;}
    if($('#regiao-noroeste-safra').is(':checked')){ var noroeste = 1;} else{ var noroeste = 0;}
    if($('#regiao-sul-safra').is(':checked')){ var sul = 1;} else{ var sul = 0;}
    if($('#regiao-sudoeste-safra').is(':checked')){ var sudoeste = 1;} else{ var sudoeste = 0;}
    if($('#regiao-oeste-safra').is(':checked')){ var oeste = 1;} else{ var oeste = 0;}

    var municio = $("#municiopio-regiao").val();
    var produtor = $("#produtor-safra").val();
    var tecnico = $("#tecnico-safra").val();
    var id_ur = $("#id-ur").val();
    var cultivar = $("#cultivar-safra").val();
    var ferrugem = $("input[name=ferrugem]:checked").val();
    var tipo_soja = $("input[name=tipo-soja]:checked").val();
    var data_inicial = $("#data-inicial-amostra").val();
    var data_final = $("#data-final-amostra").val();

    dados = filterByAno(prepare_ano(ano_safra), "");
    //console.log("Filtrou por ano " + ano_safra); 
    dados = filterByRegion(norte, noroeste, sul, sudoeste, oeste, dados);

    if(municio == "Todos"){
        //console.log("Filtrou por todos os municipios");
    } else {
        //console.log("Filtrou pelo municipio " + municio);
        dados = filterByCounty(municio,dados);
    }

    if(produtor == ""){
        //console.log("Filtrou por todos os produtores");
    } else {
        //console.log("Filtrou pelo produtor " + produtor);
        dados = filterByProducer(produtor,dados);
    }

    if(tecnico == "Todos"){
        //console.log("Filtrou por todos os tecnicos");
    } else {
        //console.log("Filtrou pelo tecnico " + tecnico);
        dados = filterByTechnical(tecnico,dados);
    }

    if(id_ur == ""){
        //console.log("Filtrou por todos as UR's");
    } else {
        //console.log("Filtrou pela UR com o ID " + id_ur);
        dados = filterByUr(id_ur,dados);
    }

    if(cultivar == "Todos"){
        //console.log("Filtrou por todos os cultivar");
    } else {
        //console.log("Filtrou pelo cultivar " + cultivar);
        dados = filterByCultivar(cultivar,dados);
    }

    if(ferrugem == "ferrugem-sim"){
        //console.log("Filtrou por cultivos com ferrugem");
        dados = filterByRust(1,dados);
    } else if (ferrugem == "ferrugem-nao") {
        //console.log("Filtrou por cultivos sem ferrugem");
        dados = filterByRust(0,dados);
    } else {
        //console.log("Filtrou por cultivos com ferrugem e sem ferrugem");
    }

    if(tipo_soja == "tipo-soja-sim"){
        //console.log("Filtrou por cultivos com soja Bt");
        dados = filterByBt(1,dados);
    } else if (tipo_soja == "tipo-soja-nao") {
        //console.log("Filtrou por cultivos sem soja Bt");
        dados = filterByBt(0,dados);
    } else {
        //console.log("Filtrou por cultivos com soja Bt e não Bt");
    }


    if(data_inicial == "" || data_final == ""){
        //console.log("Filtrou por todos os períodos");
    } else {
        dados = filterByPeriod(data_inicial, data_final, dados);
        //console.log("Filtrou por desde: " + data_inicial + " até: " + data_final);
    }

    console.log(dados);
    
    $.each(Chart.instances, function(i, obj){
        if(obj.chart.canvas.id == "canvas-generator-graph-pizza"){
            obj.destroy();
        }
    });
    

    gerarCanvasGraficoPizza(dados);
}
