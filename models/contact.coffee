class AddressBook.Contact extends Batman.Model
  @resourceName: 'contact'
  @persist Batman.LocalStorage
  @encode 'name', 'phone'
