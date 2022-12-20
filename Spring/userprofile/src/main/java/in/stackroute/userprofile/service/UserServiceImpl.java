package in.stackroute.userprofile.service;

import in.stackroute.userprofile.exceptions.UserExistsException;
import in.stackroute.userprofile.model.User;
import in.stackroute.userprofile.model.UserCredentials;
import in.stackroute.userprofile.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserProfileRepository repository;
    @Override
    public User registerUser(User newUser) throws UserExistsException {
        if(repository.existsByEmail(newUser.getEmail())){
            throw new UserExistsException("User with the email already Exixts");
        }
      return repository.save(newUser);
    }

    @Override
    public boolean authenticateUser(UserCredentials credentials) {
        return false;
    }
}
