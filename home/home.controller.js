class HomeCtrl {
  constructor(HomeService) {
    "ngInject";
    var $ctrl=this;
    $ctrl.name='Contacts';
    $ctrl.contacts = HomeService.list();
    $ctrl.showModal = false;
    $ctrl.contact = {};

    $ctrl.addRecord = function() {
      $ctrl.contact = {};
      $ctrl.showModal = true;
      $ctrl.modalTitle = 'Add Contact';
    };

    $ctrl.saveContact = function() {
      HomeService.save($ctrl.contact);
      alert(HomeService.alertTxt);
      $ctrl.contact = {};
      $ctrl.showModal = false;
    };

    $ctrl.delete = function(id) {
      HomeService.delete(id);
      alert(HomeService.alertTxt);
      if ($ctrl.contact.id == id) $ctrl.contact = {};
    };
    $ctrl.edit = function(id) {
      $ctrl.contact = angular.copy(HomeService.get(id));
      $ctrl.showModal = true;
    };
    $ctrl.closeModal = function(id) {
      $ctrl.showModal = false;
    };

  }
}

export default HomeCtrl;
