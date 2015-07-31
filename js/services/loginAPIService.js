app.factory('loginAPI', function($http, config){
	var _getOneContatos = function ( contato ){
		return $http.get(config.baseUrl+"/login", contato);
	};
	var _saveOneContatos = function ( contato ){
		// return $http.post(config.baseUrl+"/createuser", contato);
		return $http.get(config.baseUrl+"/createuser", contato);
	};
	return {
		getOneContatos : _getOneContatos,
		saveOneContatos : _saveOneContatos
	};
})