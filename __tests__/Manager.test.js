const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an instance of Manager wtih 'name' string, 'id' number, 'email' string, and 'officeNumber' number", () => {
            const mng = new Manager("Frank", 2, "email@gmail.com", 1);

            expect(mng.name).toEqual("Frank");
            expect(mng.id).toEqual(2);
            expect(mng.email).toEqual("email@gmail.com");
            expect(mng.officeNumber).toEqual(1);
        });
    });
    describe("getName", () => {
        it("should return the name value of a given Manager using the super class' method getName", () => {
            const mng = new Manager("Frank", 2, "email@gmail.com", 1);

            expect(mng.getName()).toEqual("Frank");
        });
    });
    describe("getId", () => {
        it("should return the id value of a given Manager using the super class' method getId", () => {
            const mng = new Manager("Frank", 2, "email@gmail.com", 1);

            expect(mng.getId()).toEqual(2);
        });
    });
    describe("getEmail", () => {
        it("should return the email value of a given Manager", () => {
            const mng = new Manager("Frank", 2, "email@gmail.com", 1);

            expect(mng.getEmail()).toEqual("email@gmail.com");
        });
    });
    describe("getSchool", () => {
        it("should return the officeNumber value of a given Manager", () => {
            const mng = new Manager("Frank", 2, "email@gmail.com", 1);

            expect(mng.getOfficeNumber()).toEqual(1);
        });
    });
    describe("getRole", () => {
        it("should return the value 'Manager'", () => {
            const emp = new Manager("Frank", 2, "email@gmail.com", 1);
            expect(emp.getRole()).toEqual("Manager");
        });
    });
})