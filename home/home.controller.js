class HomeCtrl {
  constructor(HomeService) {
    "ngInject";
    var $ctrl=this;
    $ctrl.name='Students';
    $ctrl.results = HomeService.list();
    $ctrl.showModal = false;
    $ctrl.student = {};

    $ctrl.addRecord = function() {
      $ctrl.student = {};
      $ctrl.showModal = true;
      $ctrl.modalTitle = 'Add Student';
    };

    $ctrl.saveRecord = function() {
      HomeService.save($ctrl.student);
      alert(HomeService.alertTxt);
      $ctrl.student = {};
      $ctrl.showModal = false;
      $ctrl.results = HomeService.list();
    };

    $ctrl.delete = function(id) {
      HomeService.delete(id);
      alert(HomeService.alertTxt);
      if ($ctrl.student.id == id) $ctrl.student = {};
      $ctrl.results = HomeService.list();
    };
    $ctrl.edit = function(id) {
      $ctrl.student = angular.copy(HomeService.get(id));
      $ctrl.showModal = true;
      $ctrl.modalTitle = 'Edit Student';
    };
    $ctrl.closeModal = function(id) {
      $ctrl.showModal = false;

    };
    $ctrl.getTopGPA = function() {
      return HomeService.getHighestGPA($ctrl.students);
    };
  }
}

export default HomeCtrl;
