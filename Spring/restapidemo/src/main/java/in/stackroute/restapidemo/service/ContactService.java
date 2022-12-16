package in.stackroute.restapidemo.service;

import in.stackroute.restapidemo.exceptions.ContactExistsException;
import in.stackroute.restapidemo.exceptions.ContactNotFoundException;
import in.stackroute.restapidemo.model.Contact;

import java.util.List;

public interface ContactService {
    public List<Contact> getAllContacts();
    public Contact addContact(Contact contact) throws ContactExistsException;
    public void deleteContact(String contactId) throws ContactNotFoundException;
    public Contact getContactByEmail(String email) throws ContactNotFoundException;
    public List<Contact> getAllcontactsByCategory(String category);
    public Contact  editContact(Contact newContact,String contactId) throws ContactNotFoundException;
}
