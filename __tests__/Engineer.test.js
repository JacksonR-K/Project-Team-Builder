const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an instance of Engineer wtih 'name' string, 'id' number, 'email' string, and 'github' string", () => {
            const eng = new Engineer("Frank", 2, "email@gmail.com", "frankcodes");

            expect(eng.name).toEqual("Frank");
            expect(eng.id).toEqual(2);
            expect(eng.email).toEqual("email@gmail.com");
            expect(eng.github).toEqual("frankcodes");
        });
    });
    describe("getName", () => {
        it("should return the name value of a given Engineer using the super class' method getName", () => {
            const eng = new Engineer("Frank", 2, "email@gmail.com", "frankcodes");

            expect(eng.getName()).toEqual("Frank");
        });
    });
    describe("getId", () => {
        it("should return the id value of a given Engineer using the super class' method getId", () => {
            const eng = new Engineer("Frank", 2, "email@gmail.com", "frankcodes");

            expect(eng.getId()).toEqual(2);
        });
    });
    describe("getEmail", () => {
        it("should return the email value of a given Engineer", () => {
            const eng = new Engineer("Frank", 2, "email@gmail.com", "frankcodes");

            expect(eng.getEmail()).toEqual("email@gmail.com");
        });
    });
    describe("getGithub", () => {
        it("should return the github value of a given Engineer", () => {
            const eng = new Engineer("Frank", 2, "email@gmail.com", "frankcodes");

            expect(eng.getGithub()).toEqual("frankcodes");
        });
    });
    describe("getRole", () => {
        it("should return the value 'Engineer'", () => {
            const emp = new Engineer("Frank", 2, "email@gmail.com", "frankcodes");
            expect(emp.getRole()).toEqual("Engineer");
        });
    });
})