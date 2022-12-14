package in.stackroute.employee.repository;

import in.stackroute.employee.model.Employee;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class EmployeeRepository {

    List<Employee> employeeList;

    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    public EmployeeRepository(List<Employee> employeeList) {
        this.employeeList = new ArrayList<>();
    }

    public Employee addEmployee(Employee employee){
        this.employeeList.add(employee);
        return employee;
    }

    public void deleteEmployee(int empId){
        this.employeeList.removeIf(employee -> employee.getEmpId()==empId);
    }
}
