//Ano
function filter_by_ano(ano){
    var data = JSON.parse(localStorage.getItem("dados"));
    var cont = 0;
    var i = 0;
    ano = ano.split('/');
    ano = ano[0];
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


// Testes
//filter_by_ano($( "#ano-da-safra" ).val()); //Está funcionando