## REACT
- It is a open source javascript library
- It uses JSX syntax - Javascript extension
- single page application 
- React is referred as view (MVC) - UI
M- model
V- view
C- controller

- SPA
- Angular
- Backbone
- Vue.js.....

# Why React
- Developed and maintained by Facebook
- Easy to learn, use and also maintain
- Huge community
- Popular among FE developers
- Lightweight as compared to other UI frameworks
- Virtual DOM


# React follows component based approach
- Functional component
- Class component


# Pre requisites 
- html, css, bootstrap
- Javascript fundamentals
- ES6 syntax


Setting up environment
- Nodejs
- VS code
- Browser (Chrome)

# Creating react app
 - ----------------- 
 - CLI - Command Line Interface 
 npx create-react-app my-app
 cd my-app
 npm start

- CDN (not recommended)
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


Babel - transpiler
------------------- 
- jsx ---> Javascript
- https://unpkg.com/@babel/standalone@7.20.0/babel.min.js


# There are 3 phases of component
1.Initilising phase - initialising and memory allocation for a componet
2.Mounting phase - renders all the content on browser
3.Unmounting phase - component will be destroyed or removed

# Class based components have some lifecycle methods 
- componentDidMount() 
- componentDidUpdate()
- componentWillUnmount()


# props - are used to pass data from parent component to child component

# State
- used for managing the data for specific component
- are objects that determine components and rendering behaviour
- changes in state will also change in component data
- state can have property/ array/ array of objects
- state is private to the component
- state of one component cannot be accessed from another component


# Task-1
- create a users component (rfc)  and usersList component (rfc)
- usersList component as a child of users component
- use props to send data from parent to child component
- create a state in users component by name customer
- initial value of the state should be array of customer obj - atleast 5 value
- obj [{
    name:
    accountType:
    accountNo:
    email:
    contactNo:
    DOB:

}]

- onchangestate display only one customer obj

# Task-2
- create customerList componet using (rcc)
- usersList component as a child of customerList component
- create a state in customerList component by name customer
- initial value of the state should be array of customer obj - atleast 5 value
- obj [{
    name:
    accountType:
    accountNo:
    email:
    contactNo:
    DOB:

}]
- onchangestate display only one customer obj


npm install uuid - to get unique id

 
# Task-3

- Create MovieList(CustomerList) component as a parent and  Movie(Contacts) as a child component
- take a data adout a movie having name,main_artist,language,duration,rating from the user and into the movies arrary
- Retrieve the data from the movies array and display it on the webpage

# Fetching the data from 3rd party API

- npm install axios

# Task 
- Create a resource by name bankdata and store the bank information with the property name, ifsc_code, h.o, nationalized_bank by using json-server(FAKE REST API)

# Routing

- react-router-dom
- npm install react-router-dom@6

- npm install formik yup

# Testing
- JEST - testing framework

# Material UI

# Redux
- state container for JS apps
- Basic building blocks of Redux - Store, Action, Reducer

- created new application 
# Dependencies
- npm install @reduxjs/toolkit
- npm install redux
- npm install react-redux

-  npm install @reduxjs/toolkit redux react-redux

