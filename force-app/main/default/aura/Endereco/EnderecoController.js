/* controller */
({
   /*  doInit : function(component, event, helper){
        helper.
    }, */ 

    ChamaViaCep: function(component, event, helper) {
        console.log("Chamou Controller");
        helper.BuscaCepHelper(component, event, helper);
    }
})