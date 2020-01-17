public with sharing class ControllerBuscaCep {
    @AuraEnabled
    public static Object BuscaCep(String recordId, String cep) {
        //ViaCep pegaCep = new ViaCep();
        //pegaCep.BuscaCep(recordId, cep);

        System.debug('entrou no controler buscacep');
        return ViaCep.BuscaCep(recordId, cep);
    }
}
