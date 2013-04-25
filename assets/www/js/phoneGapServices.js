'use strict';

angular.module('angularTest.phoneGapServices', ['angularTest.cordovaReady'])
 .factory('deviseInformation', function ($rootScope, cordovaReady) {
   return {
     getDeviseLanguage:
     cordovaReady(function (callback) {
        var lang = navigator.language ;
        callback(lang);
        $rootScope.$apply();
     })
   };
 });
