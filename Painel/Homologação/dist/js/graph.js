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


    var ctx = document.getElementById("canvas-generator-graph-bar").getContext('2d');
    var myChart = new Chart(document.getElementById("canvas-generator-graph-bar"), {
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

function filtrar(){
    var ano_safra = $("#ano-da-safra").val();
    var regiao = $("#regiao-safra").val();
    var municio = $("#municiopio-regiao").val();
    var produtor = $("#produtor-safra").val();
    var tecnico = $("#tecnico-safra").val();
    var id_ur = $("#id-ur").val();
    var cultivar = $("#cultivar-safra").val();
    var ferrugem = $("input[name=ferrugem]:checked").val();
    var data_inicial = $("#data-inicial-amostra").val();
    var data_final = $("#data-final-amostra").val();

    console.log(ano_safra);
    console.log(regiao);
    console.log(municio);
    console.log(produto);
    console.log(ferrugem);
    console.log(tecnico);
    console.log(id_ur);
    console.log(cultivar);
    console.log(data_inicial);
    console.log(data_final);

    dados = filterByAno(ano_safra, "");
    console.log("Filtrou por ano");
    if(regiao == "Todas"){
        console.log("Filtrou por todas as regiões");
        //dados = filterByRegion(1,1,1,1,1,1,dados);
    } else {
        console.log("Filtrou pela regiao " + regiao);
        dados = filterByRegion(regiao,dados);
    }

    if(municio == "Todos"){
        console.log("Filtrou por todos os municipios");
    } else {
        console.log("Filtrou pelo municipio " + municio);
        dados = filterByRegion(municio,dados);
    }

    if(produtor == null){
        console.log("Filtrou por todos os produtores");
    } else {
        console.log("Filtrou pelo produtor " + produtor);
        dados = filterByProducer(produtor,dados);
    }

    if(ferrugem == "ferrugem-sim"){
        console.log("Filtrou por cultivos com ferrugem");
        dados = filterByRust(1,dados);
    } else if (ferrugem == "ferrugem-nao") {
        console.log("Filtrou por cultivos sem ferrugem");
        dados = filterByRust(0,dados);
    } else {
        console.log("Filtrou por cultivos com ferrugem e sem ferrugem");
    }

    if(tecnico == "Todos"){
        console.log("Filtrou por todos os tecnicos");
    } else {
        console.log("Filtrou pelo tecnico " + tecnico);
        dados = filterByTechnical(tecnico,dados);
    }


    if(id_ur == null){
        console.log("Filtrou por todos as UR's");
    } else {
        console.log("Filtrou pela UR com o ID " + id_ur);
        dados = filterByUr(id_ur,dados);
    }

    if(cultivar == "tipo-soja-sim"){
        console.log("Filtrou por cultivos com soja Bt");
        dados = filterByBt(1, dados);
    } else if (cultivar == "tipo-soja-nao") {
        console.log("Filtrou por cultivos com soja não Bt");
        dados = filterByBt(0,dados);
    } else {
        console.log("Filtrou por cultivos com soja Bt e Não Bt");
    }

    
}