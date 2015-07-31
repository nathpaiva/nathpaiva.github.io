app.controller("listBuyCtrl", function($scope, listAPI, $rootScope, $location){

	$rootScope.activetab = $location.path();
	$scope.titleBuy = "Lista iBuy";
	$scope.list = [];

	// Load All items of Object
	var loadItem = function (){
		listAPI.getListProducts().success(function ( data ){
			$scope.list = data.list;
		}).error(function ( data ){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	// Add New Itens on list
	$scope.addItem = function( item ){
		$scope.list.push(angular.copy(item));

		listAPI.updateOneProduct(item).success(function ( data ){
			if (data.result !== "OK") {
				$scope.message = "Erro ao adicionar produto, tente novamente em instantes";

				loadItem();
				return true;
			};

			delete $scope.item;
		}).error(function ( data ){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	// Orther By list to name
	$scope.ortherBy = function ( campo ){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	// Change the Items of list insert
	$scope.changeItem = function ( item ) {
		listAPI.updateOneProduct(item).success(function ( data ){
			if (data.result !== "OK") {
				$scope.message = "Erro ao alterar";
				loadItem();
			};
		}).error(function ( data ){
			$scope.message = "Aconteceu um problema: " + data;
		});
    };

    // Delete each item clicked
    $scope.deleteItem = function ( idx , item ) {
		// var itemDelete = $scope.list[idx];
		listAPI.deleteOneProduct(item).success(function ( data ){
			if (data.result !== "OK") {
				$scope.message = "Erro ao excluir item";
				return true;
			}

		$scope.list.splice(idx, 1);

		}).error(function ( data ){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	loadItem();
});