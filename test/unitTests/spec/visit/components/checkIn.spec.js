describe('CheckInController', function () {

  var $componentController, $rootScope, visitService, notifier, $q;

  beforeEach(module('visit'));

  beforeEach(inject(function (_$componentController_, _visitService_, _$rootScope_, _$q_, _notifier_) {
    $componentController = _$componentController_;
    visitService = _visitService_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    notifier = _notifier_;
  }));

  beforeEach(function () {

  });

  describe('$onChanges', function () {

    it('should disable check-in when there is a visit for today', function () {
      var visit = { patient: { uuid: '7401f469-60ee-4cfa-afab-c1e89e2944e4' } };
      spyOn(visitService, 'getTodaysVisit').and.callFake(function () {
        return $q(function (resolve) {
          return resolve(visit);
        });
      });
      var ctrl = $componentController('checkIn');
      ctrl.$onChanges({ patient: { currentValue: { uuid: '7401f469-60ee-4cfa-afab-c1e89e2944e4' } } });
      $rootScope.$apply();
      expect(ctrl.todayVisit).toEqual(visit);
      expect(ctrl.disableCheckin).toEqual(true);
    });

    it('should check-in enabled when there is not visit for today', function () {
      spyOn(visitService, 'getTodaysVisit').and.callFake(function () {
        return $q(function (resolve) {
          return resolve(null);
        });
      });
      var ctrl = $componentController('checkIn');
      ctrl.$onChanges({ patient: { currentValue: { uuid: '7401f469-60ee-4cfa-afab-c1e89e2944e4' } } });
      $rootScope.$apply();
      expect(ctrl.todayVisit).toBeUndefined();
      expect(ctrl.disableCheckin).toBeUndefined();
    });
  });

  describe('checkIn', function () {

    it('should check-in the patient', function () {

      var visit = {};

      spyOn(visitService, 'checkInPatient').and.callFake(function () {
        return $q(function (resolve) {
          return resolve(visit);
        });
      });

      var ctrl = $componentController('checkIn');

      ctrl.checkIn();

      expect(visitService.checkInPatient).toHaveBeenCalled();

    });

    it('should update the day\'s visit', function () {

      var visit = {};

      spyOn(visitService, 'checkInPatient').and.callFake(function () {
        return $q(function (resolve) {
          return resolve(visit);
        });
      });

      var ctrl = $componentController('checkIn', null, {
        onCheckIn: function () {
        }
      });

      ctrl.checkIn();
      $rootScope.$apply();

      expect(ctrl.todayVisit).toEqual(visit);

    });

    it('should disable check-in', function () {

      var visit = {};

      spyOn(visitService, 'checkInPatient').and.callFake(function () {
        return $q(function (resolve) {
          return resolve(visit);
        });
      });

      var ctrl = $componentController('checkIn', null, {
        onCheckIn: function () {
        }
      });

      ctrl.checkIn();
      $rootScope.$apply();

      expect(ctrl.disableCheckin).toEqual(true);

    });

    it('should call onCheckIn binding', function () {

      var visit = {};

      spyOn(visitService, 'checkInPatient').and.callFake(function () {
        return $q(function (resolve) {
          return resolve(visit);
        });
      });

      var ctrl = $componentController('checkIn', null, { onCheckIn: jasmine.createSpy('onCheckIn') });

      ctrl.checkIn();
      $rootScope.$apply();

      expect(ctrl.onCheckIn).toHaveBeenCalled();

    });

  });

});
