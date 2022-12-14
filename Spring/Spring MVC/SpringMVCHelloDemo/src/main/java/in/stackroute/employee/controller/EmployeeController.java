package in.stackroute.employee.controller;

import in.stackroute.employee.model.Employee;
import in.stackroute.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
//@RequestMapping("/hello")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

//    @RequestMapping(method = RequestMethod.GET)
    @GetMapping("/")
    public String getWelcomePage(ModelMap modelMap){
        modelMap.addAttribute("employeeList",employeeRepository.getEmployeeList());
        return "index";
    }

    @PostMapping("/saveEmployee")
      public ModelAndView saveEmployeeData(Employee employee){
        ModelAndView modelAndView = new ModelAndView("index");
        this.employeeRepository.addEmployee(employee);
        modelAndView.addObject("employeeList",this.employeeRepository.getEmployeeList());
        return  modelAndView;
    }

    //deleteEmployee?empId=${temp.empId}
    @GetMapping("/deleteEmployee")
    public String deleteEmployee(@RequestParam("empId") int empId){
        this.employeeRepository.deleteEmployee(empId);
        return "redirect:/";
    }

    //provide icon for update--> onclick -- get new form --- "update.jsp"
    //populate all the emp data on a form
    //update button ; action value ="updateForm"
   //rediredted to "/" with the updated values of employee

}
