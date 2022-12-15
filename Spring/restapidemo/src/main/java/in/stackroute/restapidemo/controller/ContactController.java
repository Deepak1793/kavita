package in.stackroute.restapidemo.controller;

import in.stackroute.restapidemo.exceptions.ContactExistsException;
import in.stackroute.restapidemo.exceptions.ContactNotFoundException;
import in.stackroute.restapidemo.model.Contact;
import in.stackroute.restapidemo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Controller
@RestController
@RequestMapping("/api/v1")
public class ContactController {

    @Autowired
    private ContactRepository repository;//has-a

    @GetMapping("/info")
    public String apinfo() {
        return "Contact API is running";
    }

    @GetMapping("/newinfo")
    public String newapifo() {
        return "New Contact API running";
    }

    @GetMapping("/contacts")
    public List<Contact> getAllcontacts() {
        return repository.getAllContacts();
    }

//    @PostMapping("/contacts")
//    @ResponseStatus(HttpStatus.CREATED)//201
//    public Contact addContact(@RequestBody Contact newContact) {
//        return repository.addContact(newContact);
//    }

    @PostMapping("/contacts")
    public ResponseEntity<Contact> addContact(@RequestBody Contact newContact) throws ContactExistsException {
        Contact contact = repository.addContact(newContact);
        return new ResponseEntity<>(contact,HttpStatus.CREATED);
    }

    @DeleteMapping("/contacts/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable String id) throws ContactNotFoundException {
        repository.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
