(function() {
  var AddressBook,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AddressBook = (function(_super) {

    __extends(AddressBook, _super);

    function AddressBook() {
      return AddressBook.__super__.constructor.apply(this, arguments);
    }

    AddressBook.model('contact');

    AddressBook.controller('contact');

    return AddressBook;

  })(Batman.App);

  window.AddressBook = AddressBook;

}).call(this);
