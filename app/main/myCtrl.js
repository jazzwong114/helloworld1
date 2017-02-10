
var app=angular.module('myApp',[]);

app.controller('myController',function($scope){
		$scope.FirstName="Jazz";
		$scope.LastName="Wong";
		$scope.FullName=function(){return $scope.FirstName + " " + $scope.LastName;};
	}
);


app.controller('myColor',function($scope){
		$scope.color="blue";
	}
);

app.controller('nameControl',function($scope){
		$scope.Names=[
			{name:'Jazz',country:'Malaysia'},
			{name:'Sam',country:'Sg'},
			{name:'John',country:'India'}
		];
	}
);