app.controller("listDetailBuyCtrl", function($scope, $location, listAPI){

	$scope.list = [];
	$scope.id = "";

	// Load All items of Object
	var loadItemDetail = function (){
		var id = $location.search().id;
		$scope.id = id;
		listAPI.getOneProduct(id).success(function ( data ){
			$scope.list = data.list;
			console.log(data);
		}).error(function ( data ){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	loadItemDetail();
});