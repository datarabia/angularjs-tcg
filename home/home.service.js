class HomeService {
  constructor() {
    'ngInject';

var uid = 1;

    var contacts = [{
        id: 0,
        'name': 'Rick Smith',
        'email': 'rick.smith@tcg.com',
        'mobile': '703 350 2066',
        'zipcode': 12345
    },{
        id: 1,
        'name': 'John Smith',
        'email': 'john.smith@tcg.com',
        'mobile': '703 350 2099',
        'zipcode': 54321
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

    this.list = function (asc) {
      var first;
      var next;
      if(asc){
        for(var i=0;i<contacts.length-1;i++){
          if(asc && contacts[i].zipcode>contacts[i+1].zipcode){
              first = contacts[i+1];
              next = contacts[i];
              contacts[i]=first;
              contacts[i+1]=next;
          }
        }
      } else{
        for(var i=0;i<contacts.length-1;i++){
          if(asc && contacts[i].zipcode<contacts[i+1].zipcode){
              first = contacts[i+1];
              next = contacts[i];
              contacts[i]=first;
              contacts[i+1]=next;
          }
      }
    }
        return contacts;
    }
    }
}

export default HomeService;