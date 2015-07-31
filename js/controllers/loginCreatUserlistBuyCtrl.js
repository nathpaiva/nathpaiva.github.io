app.controller("loginCreatUserlistBuyCtrl", function($scope, $window, loginAPI, listAPI, $rootScope, $location){

	$rootScope.activetab = $location.path();
	$scope.titleBuy = "Bem vindo ao iBuy";
	$scope.saved = localStorage.getItem('loginteste');
	$scope.registerLogin = ( $scope.saved !== null ) ? JSON.parse($scope.saved) : [];

	// login user
	$scope.login = function ( contato ){
		var enterContato = contato.name,
			enterPass = contato.pass;

		// For consulting in API
		// loginAPI.getOneContatos().success(function ( data ){
		// 	if ( enterContato == data.login && enterPass == data.pass ) {
		// 		$window.location.href = '/list.html';
		// 	} else{
		// 		$scope.message = "Usuário e senha inválido";
		// 	};
		// }).error(function ( data ){
		// 	$scope.message = "Aconteceu um problema: " + data;
		// });
		// For consultin local storage
		var count = 0;
		angular.forEach($scope.registerLogin, function(value, key) {
			if (value.login === enterContato && value.pass === enterPass ) {
				count += 1;
				$scope.message = "";
				$window.location.href = '/#/list';
			};
		});
		if(count === 0){
			$scope.message = "Erro ao se autenticar.";
		};
	};

	// Create user
	$scope.createUser = function ( contato ){

		// For save in API
		// loginAPI.saveOneContatos().success(function ( data ){
		// 	if ( data.result === "OK" ) {
		// 		$window.location.href = '/list.html';
		// 	} else{
		// 		$scope.message = "Erro com o usuario registrado:" + data.result;
		// 	};
		// }).error(function ( data ){
		// 	$scope.message = "Aconteceu um problema: " + data;
		// });

		var count = 0;
		angular.forEach($scope.registerLogin, function(value, key) {
			if (value.login === contato.name) {
				count += 1;
				$scope.message = "Usuário já cadastrado";
			};
		});

		if(count === 0){
			$scope.registerLogin.push({
				login: contato.name,
				pass: contato.pass
			});

			localStorage.setItem('loginteste', JSON.stringify($scope.registerLogin));

			$scope.message = "";
			$window.location.href = '/#/list';

			$scope.message = "";
			count = null;
		};
	};
});