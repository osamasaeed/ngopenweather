(function(){

function MainCtrl($scope,WeatherService){
	
	var loc = {};
	var elem;
	$scope.title = 'weather Casting';

	var getCurrentPosition = function(){
		  navigator.geolocation.getCurrentPosition(function(position){
			 loc.lat = position.coords.latitude;
			 loc.lon = position.coords.longitude;
			 $scope.getWeather(loc);
		  
		},function(err){
		  if(err){
			elem = angular.element( document.querySelector( '#locInput' ) );
			elem.addClass('visible');
		  }
		});	  
	}
	var setWeather = function(data){
		$scope.weather = data;
		$scope.icon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png"
		$scope.Date = new Date();
		console.log(data);
		console.log(data.weather[0].icon);
		angular.element( document.querySelector( '#weatherInfo' ) ).addClass('visible');
		angular.element( document.querySelector( '#greeting' ) ).addClass('divHide');
	}

	$scope.getWeather = function(loc){
	if(loc == undefined){
		return;
	}
	WeatherService.getWeather(loc).then(function(res){
			setWeather(res);
		},function(err){
			
		});
	}
	
getCurrentPosition();
	
}

angular.module('app').controller('MainCtrl',MainCtrl);
})();