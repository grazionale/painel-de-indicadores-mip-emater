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
    //console.log(data);

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
    //console.log(new_data);
    return new_data;

}

//Retorna um objeto apenas com análises da região Norte
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
//Retorna um objeto apenas com análises da região Noroeste
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
//Retorna um objeto apenas com análises da região Sul
function filterBySul(dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);
    var i = 0;
    var sul = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.city.region.macroRegion.name).toUpperCase() === ("sul").toUpperCase()){
            sul[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Região sul não encontrada");
    }

    //console.log(sul);
    return sul;
}
//Retorna um objeto apenas com análises da região Sudoeste
function filterBySudoeste(dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);
    var i = 0;
    var sudoeste = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.city.region.macroRegion.name).toUpperCase() === ("sudoeste").toUpperCase()){
            sudoeste[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Região sudoeste não encontrada");
    }

    //console.log(sudoeste);
    return sudoeste;
}
//Retorna um objeto apenas com análises da região Oeste
function filterByOeste(dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);
    var i = 0;
    var oeste = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.city.region.macroRegion.name).toUpperCase() === ("oeste").toUpperCase()){
            oeste[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Região oeste não encontrada");
    }

    //console.log(oeste);
    return oeste;
}
/*Retorna um objeto com as regiões que o usuário escolheu, a ordem dos parâmetros da 
função devem ser seguidas, e para selecionar uma região basta passar o valor 1 ou 0 para não selecionar*/
function filterByRegion(norte_bool, noroeste_bool, sul_bool, sudoeste_bool, oeste_bool, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);
   
    var regioes = [];

    $.each(data, function(analises, analise) {
        if(analise.surveyField.field.city.region.macroRegion.name == "NORTE" && norte_bool == 1){
            regioes.push(analise);
        } else if (analise.surveyField.field.city.region.macroRegion.name == "NOROESTE" && noroeste_bool == 1){            
            regioes.push(analise);
        } else if (analise.surveyField.field.city.region.macroRegion.name == "SUL" && sul_bool == 1){
            regioes.push(analise);
        } else if (analise.surveyField.field.city.region.macroRegion.name == "SUDOESTE" && sudoeste_bool == 1){
            regioes.push(analise);
        } else if (analise.surveyField.field.city.region.macroRegion.name == "OESTE" && oeste_bool == 1){
            regioes.push(analise);
        } else {}

    });

    regioes = cleanObject(regioes); //Elimina arrays vazios dentro do array principal
    //console.log(regioes);
    return regioes;

}
//Retorna um objeto apenas com análises de um municipio específico
function filterByCounty(name_county, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var county = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.city.name).toUpperCase() === name_county.toUpperCase()){
            county[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("O município " + name_county + " não foi encontrada");
    }

    //console.log(county);
    return county;
}
//Retorna um objeto apenas com análises de um produtor específico
function filterByProducer(name_producer, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var producer = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.field.farmer.name).toUpperCase() === name_producer.toUpperCase()){
            producer[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Dados do produtor " + name_producer + " não foram encontrados");
    }

    //console.log(producer);
    return producer;
}
//Retorna um objeto apenas com análises de um responsável técnico específico
function filterByTechnical(name_technical, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var technical = [];

    $.each(data, function(analises, analise) {
        $.each(analise.surveyField.field.supervisors, function(supervisors, supervisor){
            if((supervisor.name).toUpperCase() === name_technical.toUpperCase()){
                technical[i] = analise;
                i++;
            } 
        });

    });

    if(i == 0){
        alert("Dados do técnico " + name_technical + " não foram encontrados");
    }

    //console.log(technical);
    return technical;
}
//Retorna um objeto apenas com análises de um U.R específica, através do seu valor de identificação.
function filterByUr(name_ur, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var ur = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.name).toUpperCase() === name_ur.toUpperCase()){
            ur[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Dados da U.R. " + name_ur + " não foram encontrados");
    }

    //console.log(ur);
    return ur;
}
//Retorna um objeto apenas com análises de um U.R específica, através do seu valor de identificação.
function filterByCultivar(cultivar_ur, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var cultivar = [];

    $.each(data, function(analises, analise) {
        if((analise.surveyField.harvest.name).toUpperCase() === cultivar_ur.toUpperCase()){
            cultivar[i] = analise;
            i++;
        } 
    });

    if(i == 0){
        alert("Dados com Cultivar " + cultivar_ur + " não foram encontrados");
    }

    //console.log(cultivar);
    return cultivar;
}
//Retorna um objeto apenas com análises de soja resistente ou não a ferrugem
function filterByRust(rest_bool, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var rest = [];

    if(rest_bool){
        $.each(data, function(analises, analise) {
            if(analise.surveyField.questionData.rustResistant){
                rest[i] = analise;
                i++;
            } 
        });
    
        if(i == 0){
            alert("Dados de plantações resistêntes a ferrugem não foram encontrados");
        }
    } else {
        $.each(data, function(analises, analise) {
            if(!analise.surveyField.questionData.rustResistant){
                rest[i] = analise;
                i++;
            } 
        });
    
        if(i == 0){
            alert("Dados de plantações não resistêntes a ferrugem não foram encontrados");
        }
    }

    //console.log(rest);
    return rest;
}
//Retorna um objeto apenas com análises de soja bt ou não
function filterByBt(bt_bool, dados){
    if(dados == "" || dados == null){
        var data = JSON.parse(localStorage.getItem("dados"));
    } else {
        data = dados;
    }

    //console.log(data);

    var i = 0;
    var bt = [];

    if(bt_bool){
        $.each(data, function(analises, analise) {
            if(analise.surveyField.questionData.bt){
                bt[i] = analise;
                i++;
            } 
        });
    
        if(i == 0){
            alert("Dados de plantações com soja bt não foram encontrados");
        }
    } else {
        $.each(data, function(analises, analise) {
            if(!analise.surveyField.questionData.bt){
                bt[i] = analise;
                i++;
            } 
        });
    
        if(i == 0){
            alert("Dados de plantações com soja não bt não foram encontrados");
        }
    }

    //console.log(bt);
    return bt;
}


//Retorna o primeiro ano de uma Safra, exemplo: Safra de 2017 à 2018, a função irá retornar um inteiro com valor de 2017
function prepare_ano(valor){
    return valor.split('/')[0];
}
//Limpa os objetos vazios dentro do objeto principal
function cleanObject(actual) {
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (Object.keys(actual[i]).length !== 0) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
}


// Testes
//filterByAno(prepare_ano($( "#ano-da-safra" ).val()), ""); //Ok
//filterByNorte(); //Ok
//filterByNoroeste(); //Ok
//filterBySul(); //Ok
//filterBySudoeste(); //Ok
//filterByOeste(); //Ok


//filterByRegion(1, 0, 0, 1, 0, ""); //Verificar se vai ser necessário transformar o retorno (array) em objeto, as outras funções estão retornando objeto
//filterByCounty("MARIÓPOLIS PR", ""); // Ok, mas Implementar uma função para remover espaços e caracteres especiais.
//filterByProducer("LUIZ ARCANGELO giordani", ""); // Ok, mas Implementar uma função para remover espaços e caracteres especiais.
//filterByTechnical("técnico De Agronomia", ""); // Ok, mas Implementar uma função para remover espaços e caracteres especiais.
//filterByUr("Carnieletto", ""); // Ok, mas Implementar uma função para remover espaços e caracteres especiais.
//filterByCultivar("BMX RAIO Ipro", ""); // Ok, mas Implementar uma função para remover espaços e caracteres especiais.
//filterByRust(1, "");
//filterByBt(0, "");

console.log(filterByAno(2017, 
    filterBySudoeste(
        filterByCounty("MARIÓPOLIS PR", 
        filterByProducer("LUIZ ARCANGELO GIORDANI", 
        filterByTechnical("IVANDERSON BORELLI", 
        filterByUr("MIP E MID", 
        filterByCultivar("TMG -  7262", 
        filterByRust(1, 
        filterByBt(0)))))))
        )));
      
console.log(filterByAno(2018, 
    filterByNorte(
        filterByCounty("CORNÉLIO PROCÓPIO", 
        filterByProducer("Dono da Fazenda de Cornélio", 
        filterByTechnical("Técnico De Agronomia", 
        filterByUr("Carnieletto", 
        filterByCultivar("BMX RAIO Ipro", 
        filterByRust(0, 
        filterByBt(1)))))))
        )));

    
console.log(filterByAno(2017, filterByRegion(1, 0, 0, 1, 0, ""))); // Não funciona, justamente porque o filterByRegion retorna um Array e não um Objeto. Corrigir isso.

// console.log("Ano");
// console.log(filterByAno(2017, ""));


// console.log("REgião Norte");
// console.log(filterByNorte());

// console.log("REgião Norte e Sudoeste");
// console.log(filterByRegion(1, 0, 0, 1, 0, ""));

//console.log("REgião Norte e Sudoeste e 2017");
//console.log(filterByAno(2017, filterByRegion(1, 0, 0, 1, 0, "")));
