package in.stackroute.restapidemo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseStatus;

//@ResponseStatus(value = HttpStatus.CONFLICT,reason = "contact already exists")
public class ContactExistsException extends Exception{
    public ContactExistsException(String message) {
        super(message);
    }

}
