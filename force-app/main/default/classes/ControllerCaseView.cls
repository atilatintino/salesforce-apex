public with sharing class ControllerCaseView {
    @AuraEnabled
    public static Object ValidaCpf(string recordId, String cpf){
        System.debug('entrou na controler da CaseView');
        return CaseView.Cpf(recordId, cpf);
    }
}
