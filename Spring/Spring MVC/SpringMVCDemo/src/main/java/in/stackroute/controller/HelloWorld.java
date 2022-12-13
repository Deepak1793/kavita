package in.stackroute.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/program")
public class HelloWorld {
    //localhost:8080/name of the project/hello
    @RequestMapping(method = RequestMethod.GET)
    public String getWelcomePage(ModelMap modelMap){
        modelMap.addAttribute("name","Anusha");
        return "index";// my view page name
    }
}
