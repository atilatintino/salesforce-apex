({
    PegaCpf: function(component, event, helper) {
        helper.BuscaCpf(component, event, helper);
    },

    PegaTelefone: function(component, event, helper) {
        helper.MaskTelefone(component, event, helper);
    },

    NovoCase: function(component, event, helper){
        helper.CriandoCase(component, event, helper);
    }
    /* ValidandoOCpf: function(component, event, helper){
        helper.ValidadorCpf(component, event, helper);
    } */
});