class HomeService {
  constructor() {
    'ngInject';

var uid = 1;

    var contacts = [{
        id: 0,
        'name': 'Rick Smith',
        'email': 'rick.smith@tcg.com',
        'mobile': '703 350 2066'
    }];

    var alertTxt = "";

    this.save = function (contact) {
        if (contact.name != null && !angular.isUndefined(contact.name)) {
            if (contact.id == null) {
                contact.id = uid++;
                contacts.push(contact);
                this.alertTxt = "Saved Successfully!";
            } else {
                for (var i in contacts) {
                    if (contacts[i].id == contact.id) {
                        contacts[i] = contact;
                    }
                }
                this.alertTxt = "Updated Successfully!";
            }
        } else {
            this.alertTxt = "Sorry, cannot be saved!";
        }
    }

    this.get = function (id) {
        for (var i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
    }

    this.delete = function (id) {
        for (var i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
        this.alertTxt = "Deleted Successfully!";
    }

    this.list = function () {
        return contacts;
    }
    }
}

export default HomeService;