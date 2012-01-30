class AddressBook.Contact extends Batman.Model
  @persist Batman.LocalStorage
  @encode 'name', 'phone'