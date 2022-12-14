package in.stackroute.restapidemo.controller;

import in.stackroute.restapidemo.model.Contact;
import in.stackroute.restapidemo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String apinfo(){
        return "Contact API is running";
    }

    @GetMapping("/newinfo")
    public String newapifo(){
        return "New Contact API running";
    }

    @GetMapping("/contacts")
    public List<Contact> getAllcontacts(){
        return repository.getAllContacts();
    }

    @PostMapping("/contacts")
    public Contact addContact(@RequestBody Contact newContact){
        return repository.addContact(newContact);
    }

}
