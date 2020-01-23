public with sharing class ControllerCaseView {
	@AuraEnabled
	public static Object BuscaAccount(String cpfBusca) {
		System.debug('entrou no controler BuscaAccount');
		System.debug(cpfBusca);
		return CaseView.BuscaAccount(cpfBusca);
	}
	@AuraEnabled
	public static Object NewCase(String newRecordId, 							      
							     String newTelefone, 
							     String newTipo, 
							     String newDescricao) {
		return CaseView.CriandoCase(newRecordId, newTelefone, newTipo, newDescricao);
	}
}