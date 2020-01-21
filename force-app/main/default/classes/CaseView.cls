public with sharing class CaseView {
    @AuraEnabled    
    public static Object BuscaAccount(String cpf) {
        Account acct = [SELECT Id, Name FROM Account WHERE CPF_CNPJ__c=: cpf];
        System.debug(acct.Name);
        /* actt.Cep__c = String.valueOf(conteudo.get('cep')); */
        /* Case case = [SELECT Name FROM Case WHERE CPF_CNPJ__c=: cpf];
        case.Name = acct.Name;
        UPDATE case;  */ 
        return acct;
    }

        
    }

