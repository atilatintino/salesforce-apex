public with sharing class CaseView {
	@AuraEnabled
	public static Object BuscaAccount(String cpfBusca) {
		System.debug(cpfBusca);
		Account acct = [SELECT Id, Name, Phone FROM Account WHERE CPF_CNPJ__c = :cpfBusca];
		Map<String, String> conteudo = new Map<String, String>();
		conteudo.put('id', acct.Id);
		conteudo.put('name', acct.Name);
		conteudo.put('phone', acct.Phone);
		System.debug(conteudo);
		/* actt.Cep__c = String.valueOf(conteudo.get('cep')); */
		/* Case case = [SELECT Name FROM Case WHERE CPF_CNPJ__c=: cpf];
		 case.Name = acct.Name;
		 UPDATE case;  */
		return conteudo;
	} 

	@AuraEnabled
	public static Object CriandoCase(String recordId,			 
								     String telefone, 
								     String tipo, 
								     String descricao) {
		Case c = new Case();
		c.AccountId = recordId;
		c.Telefone__c = telefone;
		c.Type = tipo;
		c.Description = descricao;
		INSERT c;
		System.debug(c);
		return c;
	}


}