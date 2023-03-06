const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an instance of Intern wtih 'name' string, 'id' number, 'email' string, and 'school' string", () => {
            const intern = new Intern("Frank", 2, "email@gmail.com", "UofT");

            expect(intern.name).toEqual("Frank");
            expect(intern.id).toEqual(2);
            expect(intern.email).toEqual("email@gmail.com");
            expect(intern.school).toEqual("UofT");
        });
    });
    describe("getName", () => {
        it("should return the name value of a given Intern using the super class' method getName", () => {
            const intern = new Intern("Frank", 2, "email@gmail.com", "UofT");

            expect(intern.getName()).toEqual("Frank");
        });
    });
    describe("getId", () => {
        it("should return the id value of a given Intern using the super class' method getId", () => {
            const intern = new Intern("Frank", 2, "email@gmail.com", "UofT");

            expect(intern.getId()).toEqual(2);
        });
    });
    describe("getEmail", () => {
        it("should return the email value of a given Intern", () => {
            const intern = new Intern("Frank", 2, "email@gmail.com", "UofT");

            expect(intern.getEmail()).toEqual("email@gmail.com");
        });
    });
    describe("getSchool", () => {
        it("should return the school value of a given Intern", () => {
            const intern = new Intern("Frank", 2, "email@gmail.com", "UofT");

            expect(intern.getSchool()).toEqual("UofT");
        });
    });
    describe("getRole", () => {
        it("should return the value 'Intern'", () => {
            const emp = new Intern("Frank", 2, "email@gmail.com", "UofT");
            expect(emp.getRole()).toEqual("Intern");
        });
    });
})