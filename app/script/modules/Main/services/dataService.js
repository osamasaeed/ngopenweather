'use strict';
 
angular.module('Data').factory('DataService', ['$http',  function($http){

  
 
  return {
    
     InvokeService : function (url, params, successCallback, errorCallback) {

	   
	   $http.jsonp(url, { params : params})
	   .success(function(response) {
        successCallback(response);
       }).error(function(error){
        errorCallback(error);
       })
    }


  }
}]);


