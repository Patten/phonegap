'use strict';

function Page1Controller($scope, deviseInformation){
     deviseInformation.getDeviseLanguage(function(lang){
        $scope.deviseLanguage = lang;
     });

}

function Page2Controller(){

}