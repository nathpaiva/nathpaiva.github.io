app.factory('listAPI', function($http, config){
	var _getListProducts = function ( ){
		return $http.get(config.baseUrl + "/list");
	};

	var _getOneProduct = function ( id ){
		return $http.get(config.baseUrl + "/detail?id" + id  );
	};

	var _updateOneProduct = function ( item ){
		// return $http.post(config.baseUrl + "/update?id" + item  );
		return $http.get(config.baseUrl + "/update?id" + item  );
	};

	var _deleteOneProduct = function ( item ){
		// return $http.delete(config.baseUrl + "/delete?id" + item.id  );
		return $http.get(config.baseUrl + "/delete?id" + item.id  );
	};

	return {
		getListProducts : _getListProducts,
		getOneProduct : _getOneProduct,
		updateOneProduct : _updateOneProduct,
		deleteOneProduct : _deleteOneProduct
	};
})