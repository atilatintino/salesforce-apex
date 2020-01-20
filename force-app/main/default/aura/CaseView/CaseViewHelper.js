({
    /* Preenchendo o CPF com máscara */
    BuscaCpf: function (component, event, helper) {
        var cpf = component.find("cpf").get("v.value");
        cpf = cpf.replace(/\D/g, "");                    //Remove tudo o que não é dígito
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
        component.set("v.varCpf", cpf);

      
    },
    /* Preenchendo Celular com márcara */
    MaskTelefone: function (component, event, helper) {
        var telefone = component.find("telCelular").get("v.value");
        telefone = telefone.replace(/\D/g, "");                 //Remove tudo o que não é dígito
        telefone = telefone.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        component.set("v.varTelefone",telefone);
    },

    MaskCpf: function (component, event, helper) {
        
    },


})