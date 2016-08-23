'use strict';

angular.module('vitals').factory('initialization',
    ['$q','$cookies', '$rootScope', 'configurations', 'authenticator', 'appService', 'spinner', 'userService', 'formLoader',
    function ($q, $cookies, $rootScope, configurations, authenticator, appService, spinner, userService, formLoader) {
        var getConfigs = function () {
            var configNames = ['patientAttributesConfig', 'addressLevels'];
            return configurations.load(configNames).then(function () {
                var mandatoryPersonAttributes = appService.getAppDescriptor().getConfigValue("mandatoryPersonAttributes");
                var patientAttributeTypes = new Poc.Patient.PatientAttributeTypeMapper().mapFromOpenmrsPatientAttributeTypes(configurations.patientAttributesConfig(), mandatoryPersonAttributes);
                $rootScope.patientConfiguration = new Poc.Patient.PatientConfig(patientAttributeTypes.personAttributeTypes, configurations.identifierSourceConfig(), appService.getAppDescriptor().getConfigValue("additionalPatientInformation"));
                $rootScope.encounterTypes = appService.getAppDescriptor().getConfigValue("encounterTypes");
                $rootScope.landingPageAfterSearch = appService.getAppDescriptor().getConfigValue("landingPageAfterSearch");
                $rootScope.defaultVisitTypes = appService.getAppDescriptor().getConfigValue("defaultVisitTypes");
                $rootScope.addressLevels = configurations.addressLevels();
            });
        };
        
        var initForms = function () {
           var deferred = $q.defer();
           formLoader.load(appService.getAppDescriptor().getClinicalServices()).then(function (data) {
               $rootScope.serviceForms = data;
               deferred.resolve();
           });
           return deferred.promise;
        };
        
        var initClinicalServices = function () {
            var deferred = $q.defer();
            $rootScope.clinicalServices = appService.getAppDescriptor().getClinicalServices();
            deferred.resolve();
            return deferred.promise;
        };
        
        var initFormLayout = function () {
            var deferred = $q.defer();
            $rootScope.formLayout = appService.getAppDescriptor().getFormLayout();
            deferred.resolve();
            return deferred.promise;
        };

        var initApp = function() {
            var deferred = $q.defer();
            appService.initApp('vitals', {'app': true, 'extension' : true, 'service': true });
            deferred.resolve();
            return deferred.promise;
        };
        
        var loadUser = function () {
            var currentUser = $cookies.get(Bahmni.Common.Constants.currentUser);
            
            return userService.getUser(currentUser).success(function(data) {
                $rootScope.currentUser = data.results[0];
            });
        };

        return spinner.forPromise(authenticator.authenticateUser()
                .then(initApp)
                .then(getConfigs)
                .then(loadUser)
                .then(initFormLayout)
                .then(initForms)
                .then(initClinicalServices));
    }]
);