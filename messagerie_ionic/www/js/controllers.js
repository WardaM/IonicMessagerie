angular.module('mike.controllers', [])

.controller('areacodeCtrl', function($scope, $state, $ionicModal) {

})

.controller('signCtrl', function($scope, $state, $ionicPopup, Login, $window) {
	// appel de la factory factory dans services qu'on passe en paramètre de la fonction pour pouvoir l'utiliser

	$scope.data = {};

	$scope.goBack = function() {
		// Fonction ngclick =  goBack()
   		$window.history.back();
   		//$window => propre à angular
  	};

	//fonction login dans login.html
	$scope.login = function(){
		// console.log($scope.data)
		//si le numero de tel et le mot de passe correspondent alors redirection vers la page chat
		if(($scope.data.phone=="0674545902") && ($scope.data.password=="12345")){
			//redirect to
			//state de la route messages
			$state.go('tab.messages');
		// }else if($scope.data.phone ==""){
		}else if(!angular.isDefined($scope.data.phone)){
			// la variable $scope.data.phone est undefined, besoin de savoir si elle existe : if exists en php => angular.isDefined(variable) => ! le contraire => si elle existe on fait ça
			console.log("remplir le bon numéro de téléphone")
		}else{
			console.log("REMPLIR LES CHAMPS")
		}
		console.log($scope.data)
	}

	$scope.register = function(){
		if(!angular.isDefined($scope.data.phone)){
			//si data.phone n'est pas défini envoi du message d'erreur suivant
			console.log('remplir le bon numéro ')
		}else if (!angular.isDefined($scope.data.email)){
			console.log('remplir le bon email ')
		}else if (!angular.isDefined($scope.data.password)){
			console.log('remplir le bon password ')
		}else if(!angular.isDefined($scope.data.repassword)){
			console.log('remplir la vérification de mdp ')

		}else if($scope.data.password == $scope.data.repassword){
			console.log("vérification du mot de passe checked");
			//code pour ajouter dans localstorage
			//appel de la fonction set dans service login factory
			// Login.set($scope.data);
			localStorage.setItem('user', JSON.stringify($scope.data));
			$state.go('tab.messages');
		}
		
	}


})

.controller('tabCtrl', function($scope, $state) {
	
})

.controller('messagesCtrl', function($scope, $state, $ionicPopup) {
		
})

.controller('messagesDetail', function($scope, $state) {

})

.controller('sendLocation', function($scope, $state) {

})

.controller('messagesCall', function($scope, $state, $ionicModal) {

})

.controller('contactsCtrl', function($scope, $state) {

})

.controller('contactsRecommended', function($scope, $state) {

})

.controller('contactsAdd', function($scope, $state) {

})

.controller('contactsSearch', function($scope, $state, $stateParams) {

})

.controller('contactsUpdate', function($scope, $state) {

})

.controller('contactsNearby', function($scope, $state) {

})

.controller('nearbyLocation', function($scope, $state) {

})

.controller('contactsInvite', function($scope, $state) {

})

.controller('groupCtrl', function($scope, $state) {

})

.controller('groupCreate', function($scope, $state) {

})

.controller('groupAdd', function($scope, $state) {

})

.controller('groupView', function($scope, $state) {

})

.controller('groupDetail', function($scope, $state) {

})


.controller('settingsCtrl', function($scope, $state, Settings) {
	//ajout de la factory Settings en paramètre
	//logout
	$scope.showPopupLogout = function(){
		localStorage.clear();
		//suppression du local storage
		$state.go('login')
		//redirection vers la page login
	}

})

.controller('changePasswordCtrl', function($scope, $state) {

})

.controller('searchCtrl', function($scope, $state) {

})