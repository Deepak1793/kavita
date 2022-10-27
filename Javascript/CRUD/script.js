// console.log("Running scripts")

function getAllEmployees() {
    console.log("Fetching all the Employees")

    // console.log(fetch("http://localhost:3001/employees"))//will return Promise Object

    fetch("http://localhost:3001/employees").then((response) => {
        if (response.status === 200) {
            console.log(response)
            return response.json()
        }
    }).
        then((employees) => {
            console.log(employees)
            employee = document.getElementById("employeeList").getElementsByTagName('tbody')[0]
            employeeData = ""

            employees.forEach(element => {
                employeeData += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td><button id=delete onclick=deleteEmployee(${element.id})>Delete</button></td>
                <td><button id=edit onclick=getEmployee(${element.id})>Edit</button></td>
                </tr>`
            });
            employee.innerHTML = employeeData
        }).
        catch((error) => {
            console.log(error)
        })

}

getAllEmployees()



function addEmployee() {
    // event.preventDefault()
    console.log("Calling AddEmployee")

    //Reading form inputs

    name = document.getElementById("employeeName").value
    email = document.getElementById("employeeMailID").value

    let newEmployee = {
        "name": name,
        "email": email
    }

    //posting data to db.json using fetch call

    fetch("http://localhost:3001/employees", {
        "method": "POST",
        "body": JSON.stringify(newEmployee),
        "headers": {
            "Content-Type": "application/json"
        }
    }).
        then((response) => {
            if (response.status === 201) {
                console.log("Recoreded Added Successfully")
                getAllEmployees()
            }
        }).
        catch((error) => {
            console.log(error)
        })

}

function deleteEmployee(params) {
    fetch(`http://localhost:3001/employees/${params}`, {
        "method": "DELETE",
    }).
        then((response) => {
            if (response.status === 200) {
                console.log("Recoreded Deleted Successfully")
                getAllEmployees()
            }
        }).
        catch((error) => {
            console.log(error)
        })
}

function getEmployee(empId){
    fetch(`http://localhost:3001/employees/${empId}`).
        then((response) => {
            if (response.status === 200) {
               return response.json()
            }
        }).
        then((employee)=>{
            document.getElementById("editEmployeeID").value=employee.id
            document.getElementById("editEmployeeName").value=employee.name
            document.getElementById("editEmployeeMailID").value=employee.email
        }).
        catch((error) => {
            console.log(error)
        })

}


function editEmployee(event){
event.preventDefault()

//Reading contents from fields in edit form
let employeeId=document.getElementById("editEmployeeID").value
let employeeName= document.getElementById("editEmployeeName").value
let employeeMailID= document.getElementById("editEmployeeMailID").value

//Transforming to json data
let updatedEmployee={
    "name":employeeName,
    "email":employeeMailID
}
fetch(`http://localhost:3001/employees/${employeeId}`, {
        "method": "PUT",
        "body": JSON.stringify(updatedEmployee),
        "headers": {
            "Content-Type": "application/json"
        }
    }).
        then((response) => {
            if (response.status === 200) {
                console.log("Recoreded Updated Successfully")
                getAllEmployees()
            }
        }).
        catch((error) => {
            console.log(error)
        })

}
