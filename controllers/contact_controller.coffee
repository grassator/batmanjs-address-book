class AddressBook.ContactController extends Batman.Controller

  constructor: ->
    super
    @set 'search', null

  create: ->
    (new AddressBook.Contact).save()
    @set 'search', null
  
  @accessor 'filtered_contacts',
    get: ->
      contacts = AddressBook.get('Contact.all')
      if s = @get('search')
        contacts.filter (contact)->
          name = contact.get('name')
          phone = contact.get('phone')
          (name and name.indexOf(s) != -1) or (phone and phone.indexOf(s) != -1)
      else
        contacts