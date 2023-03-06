const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with 'name' string, 'id' number, and 'email' string", () => {
            const emp = new Employee("Frank", 2, "email@gmail.com");
            
            expect(emp.name).toEqual("Frank");
            expect(emp.id).toEqual(2);
            expect(emp.email).toEqual("email@gmail.com");
        });
    });
    describe("getName", () => {
        it("should return the name value of a given Employee", () => {
            const emp = new Employee("Frank", 2, "email@gmail.com");
            expect(emp.getName()).toEqual("Frank");
        });
    });
    describe("getId", () => {
        it("should return the id value of a given Employee", () => {
            const emp = new Employee("Frank", 2, "email@gmail.com");
            expect(emp.getId()).toEqual(2);
        });
    });
    describe("getEmail", () => {
        it("should return the email value of a given Employee", () => {
            const emp = new Employee("Frank", 2, "email@gmail.com");
            expect(emp.getEmail()).toEqual("email@gmail.com");
        });
    });
    describe("getRole", () => {
        it("should return the value 'Employee'", () => {
            const emp = new Employee("Frank", 2, "email@gmail.com");
            expect(emp.getRole()).toEqual("Employee");
        });
    });
})