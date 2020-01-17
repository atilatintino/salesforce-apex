({
    //helperMethod : function() {
    //}
    BuscaCepHelper: function (component, event, helper) {
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
})    
    //var cep = component.get("v.varCep"); <-- Não funciona deste jeito
    //component.set("v.varCep", "05108-150"
