public with sharing class CNPJ {
	@AuraEnabled
	public static Object BuscaCNPJ(String consultaCnpj) {

		System.debug(consultaCnpj);
		String urlConnection = 'https://www.receitaws.com.br/v1/cnpj/'+consultaCnpj;
        System.debug(urlConnection);
		HttpRequest myHttpRequest = new HttpRequest();
		myHttpRequest.setMethod('GET');
		myHttpRequest.setEndPoint(urlConnection);
        System.debug(myHttpRequest);
		Http http = new Http();
		HttpResponse myResponse = http.send(myHttpRequest);
        /* System.debug(myResponse.getBody()); */
		Map<String, Object> conteudo = (Map<String, Object>)JSON.deserializeUntyped(myResponse.getBody());
		/* String teste = String.valueOf(conteudo.get('nome'));
        System.debug(teste); */
		return myResponse.getBody();

	}
}