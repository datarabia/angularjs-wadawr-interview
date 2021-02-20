class HomeService {
  constructor() {
    'ngInject';

    var contacts = [{
        id: 0,
        'name': 'John Smith',
        'classes': [{'name': 'History', 'grade': 'A+'}, 
       {'name': 'Math', 'grade': 'B'},
       {'name': 'English', 'grade': 'C-'},
       {'name': 'Biology', 'grade': 'A'}]
    },{
        id: 1,
        'name': 'Jane Doe',
          'classes': [{'name': 'History', 'grade': 'A'}, 
       {'name': 'Math', 'grade': 'A'},
       {'name': 'English', 'grade': 'D-'},
       {'name': 'Biology', 'grade': 'C'}]
    },{id: 2,
        'name': 'John Doe',
          'classes': [{'name': 'History', 'grade': 'C'}, 
       {'name': 'Math', 'grade': 'B'},
       {'name': 'English', 'grade': 'B'},
       {'name': 'Biology', 'grade': 'A-'}]
    }];
    
    var uid = contacts.length;
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