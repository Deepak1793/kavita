package in.stackroute.restapidemo.repository;

import in.stackroute.restapidemo.exceptions.ContactExistsException;
import in.stackroute.restapidemo.exceptions.ContactNotFoundException;
import in.stackroute.restapidemo.model.Contact;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class ContactRepository {

    private Map<String, Contact> contactsRepo=new HashMap<>(); //in memory database

    public ContactRepository() {
       contactsRepo.put("1", new Contact("1","Anu","anu@gmail.com",132125412,"friends"));
    }

    public List<Contact> getAllContacts(){
        return new ArrayList<>(contactsRepo.values());

    }

    public Contact addContact(Contact contact) throws ContactExistsException {

        boolean contactExits = contactsRepo.values().stream().anyMatch(temp -> temp.getEmail().equalsIgnoreCase(contact.getEmail()));

        if (contactExits){
           throw new ContactExistsException("Contact already exists for the given email");
        }
        String contactId = UUID.randomUUID().toString();
        contact.setContactId(contactId);
        contactsRepo.put(contact.getContactId(), contact);
        return contactsRepo.get(contactId);


    }

    public void deleteContact(String contactId) throws ContactNotFoundException {
        Contact contact = contactsRepo.get(contactId);
        if(contact==null){
            throw new ContactNotFoundException("Contact with the given id does not exists");
        }

        contactsRepo.remove(contactId);

    }
}
