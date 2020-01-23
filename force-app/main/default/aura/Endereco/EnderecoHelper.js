({
    //helperMethod : function() {
    //}
    BuscaCepHelper: function (component) {
        var cepnew = component.find("campoCep").get("v.value");
        var recordIdNew = component.get("v.recordId");
        console.log("Chamou Helper " + cepnew + recordIdNew);
        var action = component.get("c.BuscaCep");
        action.setParams({
            cep: cepnew,
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

    verificaEndereco : function(component, event, helper){
        var cep  = '05158120';
        component.set("v.varCep", cep);

    }
})    
    //var cep = component.get("v.varCep"); <-- Não funciona deste jeito
    //component.set("v.varCep", "05108-150"
