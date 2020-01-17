public with sharing class ViaCep {
    @AuraEnabled    
    public static Object BuscaCep(String recordId, String cep) {
        String urlConnection = 'https://viacep.com.br/ws/'+ cep +'/json/';
        HttpRequest myHttpRequest = new HttpRequest();
        myHttpRequest.setMethod('GET');
        myHttpRequest.setEndPoint(urlConnection);
        Http http = new Http();
        HttpResponse myResponse = http.send(myHttpRequest);
        System.debug(myResponse.getBody());
        Map<String, Object> conteudo = (Map<String, Object>)JSON.deserializeUntyped(myResponse.getBody());
        Contact ctt = [SELECT Id FROM Contact WHERE Id=: recordId];
        ctt.Cep__c = String.valueOf(conteudo.get('cep'));
        ctt.Bairro__c = String.valueOf(conteu
        do.get('bairro'));
        ctt.Endereco__c = String.valueOf(conteudo.get('logradouro'));
        ctt.Localidade__c = String.valueOf(conteudo.get('localidade'));

        UPDATE ctt;
        return myResponse.getBody();    
    }

    
}
