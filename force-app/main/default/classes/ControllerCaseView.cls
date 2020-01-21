public with sharing class ControllerCaseView {
    @AuraEnabled
    public static Object BuscaAccount(String recordId, String cpf) {
        System.debug('entrou no controler BuscaAccount');
        return CaseView.BuscaAccount(cpf);
    }
}
