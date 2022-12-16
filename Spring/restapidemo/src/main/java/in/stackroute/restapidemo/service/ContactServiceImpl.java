package in.stackroute.restapidemo.service;

import in.stackroute.restapidemo.exceptions.ContactExistsException;
import in.stackroute.restapidemo.exceptions.ContactNotFoundException;
import in.stackroute.restapidemo.model.Contact;
import in.stackroute.restapidemo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService{
    @Autowired
    private ContactRepository repository;

    @Override
    public List<Contact> getAllContacts() {
       return repository.getAllContacts();
    }

    @Override
    public Contact addContact(Contact contact) throws ContactExistsException {
        Optional<Contact> optionalContact = repository.addContact(contact);

       return optionalContact.orElseThrow(()-> new ContactExistsException("Contact already exists for the given email"));
    }

    @Override
    public void deleteContact(String contactId) throws ContactNotFoundException {
        repository.deleteContact(contactId);

    }

    @Override
    public Contact getContactByEmail(String email) throws ContactNotFoundException {
        return repository.getContactByEmail(email);
    }

    @Override
    public List<Contact> getAllcontactsByCategory(String category) {
        return repository.getAllcontactsByCategory(category);
    }

    @Override
    public Contact editContact(Contact newContact, String contactId) throws ContactNotFoundException {
        return repository.editContact(newContact,contactId);
    }
}
