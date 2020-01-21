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
        var recordIdNew = component.get("v.recordId");
        var action = component.get("c.BuscaAccount");
        action.setParams({
            cpf: cpf,
            recordId: recordIdNew
        });

        action.setCallback(this, function (data) {
                var retornoJSON = JSON.parse(data.getReturnValue());
                component.set("v.varCep", retornoJSON['cep']);
                component.set("v.varLogradouro", retornoJSON['logradouro']);
                component.set("v.varBairro", retornoJSON['bairro']);
                component.set("v.varLocalidade", retornoJSON['localidade']);
                console.log(data.getState());
                console.log(data.getReturnValue());
                console.log("entrou no set call back");
        
        });
        $A.enqueueAction(action);
    },
    /* Preenchendo Celular com márcara */
    MaskTelefone: function (component, event, helper) {
        var telefone = component.find("telCelular").get("v.value");
        telefone = telefone.replace(/\D/g, "");                 //Remove tudo o que não é dígito
        telefone = telefone.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        component.set("v.varTelefone", telefone);
    },
    /* MÉTODO - Validando o CPF */
    ValidadorCpf: function (component, event, helper) {
        var cpf = component.find("cpf").get("v.value");
        cpf = cpf.replace(/\D/g, "");
        var array = [cpf];
        console.log(cpf);
        console.log(array);
        var numeroPrimeiro = 11;
        var numeroSegundo = 12;
        var somaPrimeiro = 0;
        var somaSegundo = 0;
        var digito;
        var primeiroValidado;
        var segundoValidado;



        /* Validando o primeiro dígito */
        for (var i = 0; i < 9; i++) {
            var digito = cpf.charAt(0 + i);
            numeroPrimeiro -= 1;
            somaPrimeiro += (digito * numeroPrimeiro);
        }
        var resto = (somaPrimeiro * 10) % 11;
        if (resto == 10) {
            resto = 0;
        }
        console.log("Primeiro dígito verificador: " + resto);
        if (resto != cpf.charAt(9)) {
            primeiroValidado = "CPF INVÁLIDO";
        }


        /* Validando o segundo dígito */
        for (var i = 0; i < 10; i++) {
            var digito = cpf.charAt(0 + i);
            numeroSegundo -= 1;
            somaSegundo += (digito * numeroSegundo);
        }
        var resto = (somaSegundo * 10) % 11;
        if (resto == 10) {
            resto = 0;
        }
        console.log("Segundo dígito verificador: " + resto);
        if (resto != cpf.charAt(10)) {
            segundoValidado = "CPF INVÁLIDO";
        }

        /* Verificando CPF com dígitos iguais */
        if (primeiroValidado != "CPF INVÁLIDO" && segundoValidado != "CPF INVÁLIDO") {
            switch (cpf) {
                case '11111111111':
                    console.log("CPF INVÁLIDO");
                    break;
                case '22222222222':
                    console.log("CPF INVÁLIDO");
                    break;
                case '33333333333':
                    console.log("CPF INVÁLIDO");
                case '44444444444':
                    console.log("CPF INVÁLIDO");
                case '55555555555':
                    console.log("CPF INVÁLIDO");
                case '66666666666':
                    console.log("CPF INVÁLIDO");
                case '77777777777':
                    console.log("CPF INVÁLIDO");
                case '88888888888':
                    console.log("CPF INVÁLIDO");
                case '99999999999':
                    console.log("CPF INVÁLIDO");
                case '00000000000':
                    console.log("CPF INVÁLIDO");
                default:
                    console.log("CPF VÁLIDO");
            }
        }



    
},
})