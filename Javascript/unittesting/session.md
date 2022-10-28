# Testing in Javascript
--------------------------- 
Mocha
----- 
- Testing framework for Javascript
- provides test runners - to run the test
- provides lifecycle hooks - to setup the test environment
before(), after(), beforeEach(), afterEach()
- provides function for test suit creation (group of test cases) - describe() 
- provides function for test case creation - it()
- assertion functions - assert(expected, actual)

Chai
---- 
- assertion library 

There are 2 assertion style
- TDD (Test Driven development) - assert()
- BDD (Behaviour Driven development) - expect/should


npm - node package manager

>npm init - package.json - keeps the track of dependencies 

To install the package in the current folder
- npm install <packagename> /npm i <packagename>

Globally
- npm install -g <packagename> / npm install --global <packagename> /npm i -g <packagename>

- development dependencies
- npm install --save-dev <packagename> /npm i --save-dev <packagename>

- npm run test

steps to add eslint
------------------- 
- add eslint extension
- npm install eslint
- config file - .\node_modules\.bin\eslint --init  
- package.json 
 "scripts": {
   
    "lint": "eslint .",
    "lint-fix":"eslint . --fix" 
  }

  - npm run lint
  - npm run lint-fix

