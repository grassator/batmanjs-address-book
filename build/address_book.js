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
    AddressBook.model('contact');
    AddressBook.controller('contact');
    return AddressBook;
  })();
}).call(this);
