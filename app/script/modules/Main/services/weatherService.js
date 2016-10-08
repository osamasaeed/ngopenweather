'use strict';
 
angular.module('Weather').factory('WeatherService', ['$q','DataService',  function($q,DataService){
        var service = {};
		var appId = '551deab7885b56678caa0ac535bc7aab';
			service.$q = $q;
		
		service.setAppid = function(appid){
			appId = appid;
		}
        service.getWeather = function (loc) { 
            var daffered = service.$q.defer(); 
				loc.appid = appId;
				loc.callback = 'JSON_CALLBACK';
			
            DataService.InvokeService('http://api.openweathermap.org/data/2.5/weather',loc, function (response) {

        daffered.resolve(response);

            }, function (response) {
                 console.log("error" + response);

                     daffered.reject(response);
            }); 
           
            return daffered.promise;
 
        };

  return service;
}]);

