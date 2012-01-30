(function() {
  var AddressBook;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  AddressBook = (function() {
    __extends(AddressBook, Batman.App);
    function AddressBook() {
      AddressBook.__super__.constructor.apply(this, arguments);
    }
    AddressBook.global(true);
    return AddressBook;
  })();

  AddressBook.Contact = (function(_super) {
    __extends(Contact, _super);
    function Contact() {
      Contact.__super__.constructor.apply(this, arguments);
    }
    Contact.persist(Batman.LocalStorage);
    Contact.encode('name', 'phone');
    return Contact;
  })(Batman.Model);

  AddressBook.ContactController = (function(_super) {
    __extends(ContactController, _super);
    function ContactController() {
      ContactController.__super__.constructor.apply(this, arguments);
      this.set('search', null);
    }
    ContactController.prototype.create = function() {
      (new AddressBook.Contact).save();
      return this.set('search', null);
    };
    ContactController.accessor('filtered_contacts', {
      get: function() {
        var contacts, s;
        contacts = AddressBook.get('Contact.all');
        if (s = this.get('search')) {
          return contacts.filter(function(contact) {
            var name, phone;
            name = contact.get('name');
            phone = contact.get('phone');
            return (name && name.indexOf(s) !== -1) || (phone && phone.indexOf(s) !== -1);
          });
        } else {
          return contacts;
        }
      }
    });
    return ContactController;
  })(Batman.Controller);
}).call(this);
