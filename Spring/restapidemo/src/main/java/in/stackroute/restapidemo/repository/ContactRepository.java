package in.stackroute.restapidemo.repository;

import in.stackroute.restapidemo.model.Contact;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class ContactRepository {

    private Map<String, Contact> contactsRepo=new HashMap<>();

    public ContactRepository() {
       contactsRepo.put("1", new Contact("1","Anu","anu@gmail.com",132125412,"friends"));
    }

    public List<Contact> getAllContacts(){
        return new ArrayList<>(contactsRepo.values());

    }

    public Contact addContact(Contact contact){
        String contactId = UUID.randomUUID().toString();
        contact.setContactId(contactId);
        contactsRepo.put(contact.getContactId(), contact);
        return contactsRepo.get(contactId);


    }
}
