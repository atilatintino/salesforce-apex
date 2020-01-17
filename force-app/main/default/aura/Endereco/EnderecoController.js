/* controller */
({
    ChamaViaCep: function(component, event, helper) {
        console.log("Chamou Controller");
        helper.BuscaCepHelper(component, event, helper);
    }
})