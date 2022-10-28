/* eslint-disable no-undef */
const { expect } = require("chai");
var calc=require("../Calculator");

describe("Testing a calculator", function () {

	before(function(){
		console.log("Before executed");
	});

	after(function(){
		console.log("After executed");
	});

	beforeEach(function(){
		console.log("BeforeEach executed");
	});

	afterEach(function(){
		console.log("AfterEach executed");
	});
    
	it("add should return correct sum",function(){
		// console.log("Test exected");
		//    var result= calc.add(10,20)
		//    expect(result).to.be.equal(20)
		expect(calc.add(10,20)).to.be.equal(30);
		expect(calc.add(-10,-20)).to.be.equal(-30);
		expect(calc.add(10,-20)).to.be.equal(-10);
		expect(calc.add(-10,20)).to.be.equal(10);
	});

	it("multiply should return correct product", ()=>{
		console.log("Test2 executed");
	});
});