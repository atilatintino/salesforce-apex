({
    /* Preenchendo o CPF com máscara */
    BuscaCpf: function (component, event, helper) {
        let cpf = component.find("cpf").get("v.value");
        cpf = cpf.replace(/\D/g, "");                    //Remove tudo o que não é dígito
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos 
        component.set("v.varCpf", cpf);
        cpf = cpf.replace(/\D/g, "");
        console.log(cpf);


        if (cpf.length == 11) {
            var isValid = this.ValidadorCpf(cpf);

            console.log(isValid);
            if (!isValid)

                return;
        } else {
            return;
        }
        console.log("Passou Validador CPF");
        /* var recordIdNew = component.get("v.recordId"); */
        /* Criando variável para buscar o Método APEX da Controller */
        var action = component.get("c.BuscaAccount");

        /* Setando os parâmetros do Método APEX */
        action.setParams({
            cpfBusca: cpf
        });
        console.log("Entrou na Action");/* Trata o retorno do Método APEX */
        action.setCallback(this, function (data) {
            console.log("Chegou no retorno");
            var retorno = data.getReturnValue();
            console.log("Passou do retorno" + retorno);
            component.set("v.recordId", retorno['id']);
            component.set("v.varNome", retorno['name']);
            var telefone = retorno['phone'];
            telefone = telefone.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
            telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
            component.set("v.varTelefone", telefone);
            console.log(data.getState());
            console.log(data.getReturnValue());
            console.log("entrou no set call back");

        });
        $A.enqueueAction(action);

    },
    /* Preenchendo Celular com márcara */
/*      MaskTelefone: function (component, event, helper) {
        var telefone = component.find("telefone").get("v.value");
        telefone = telefone.replace(/\D/g, "");                 //Remove tudo o que não é dígito
        telefone = telefone.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        component.set("v.varTelefone", telefone); 
    }, */ 

    /* MÉTODO - Validando o CPF */
    ValidadorCpf: function (cpf) {
        console.log("ENTROU VALIDADOR");
        // 
        console.log("CPF validado é " + cpf);
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
            return false;
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
            return false;
        }

        /* Verificando CPF com dígitos iguais */
        if (primeiroValidado != "CPF INVÁLIDO" && segundoValidado != "CPF INVÁLIDO") {
            switch (cpf) {
                case '11111111111':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '22222222222':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '33333333333':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '44444444444':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '55555555555':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '66666666666':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '77777777777':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '88888888888':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '99999999999':
                    console.log("CPF INVÁLIDO");
                    return false;
                case '00000000000':
                    console.log("CPF INVÁLIDO");
                    return false;
                default:
                    console.log("CPF VÁLIDO");
                    return true;
            }
        }

        console.log("CHEGOU NO FINAL DO VALIDADOR");


    },

    CriandoCase: function (component) {
        console.log("ENTROU NO MÉTODO CRIANDOCASE");
        /* Pegando o conteudo dos aura components */
        var recordId = component.get("v.recordId");
        var cpf = component.find("cpf").get("v.value");        
        var telefone = component.find("telefone").get("v.value");
        var tipo = component.find("tipo").get("v.value");
        var descricao = component.find("descricao").get("v.value");
        console.log("PEGOU O CONTEUDO DOS CAMPOS");
        /* Criando a ACTION pra pegar o MÉTODO correspondente na CONTROLLER */
        var action = component.get("c.NewCase");
        console.log("PEGOU O CONTEUDO QUE ESTÁ DENTRO DO MÉTODO APEX");
        /* Linkando os campos do MÉTODO APEX com as variáveis criadas acima */
        action.setParams({
            newRecordId: recordId,
            newCpf: cpf,            
            newTelefone: telefone,
            newTipo: tipo,
            newDescricao: descricao
        });
        console.log("Entrou na Action");/* Trata o retorno do Método APEX */
        action.setCallback(this, function (data) {
            var retorno = data.getState();
            console.log("Passou do retorno " + retorno);
            console.log(data.getState());
            if(retorno=="SUCCESS"){
                alert(nome+ " sua conta foi criada com sucesso!");
                console.log("Case Criado Com Sucesso!");
            }else{
                alert("Caso não criado");
                console.log("Case não foi criado!");
            }

        });
        $A.enqueueAction(action);

    }
});