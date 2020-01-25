public with sharing class ControllerCNPJ {
    @AuraEnabled
    public static Object MethodControllerCNPJ(String consultaCnpj) {
        System.debug('Entrou na controller do CNPJ');
        return CNPJ.BuscaCNPJ(consultaCnpj);
    }
}
