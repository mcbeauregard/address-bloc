 const MenuController = require("../controllers/MenuController");

// #1 We are calling the describe method and passing MenuController as the name of the test suite. We then pass a function defining the suite. Inside we have another call to describe. We call this function again because we might want to test several methods of the same class and separating them with different describe calls is a good way of grouping them.

 describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });

   describe("#getContactCount()", () => {

// #2  Inside of the second parameter, we pass a function implementing the specs. The first spec tests that the book has no entries, calling the  getContactCount method should return 0. Inside of the spec, we set that expectation as such and use a matcher, toBe, which checks that the return from the expect method matches the argument passed to the toBe method. If that fails, our test will fail.

     it("should return 0 when no contacts are in the book", () => {
     });

     it("should return 1 when there is exactly one contact in the book", () => {
       this.menu.contacts.push("Bob");
       expect(this.menu.getContactCount()).toBe(1)
     });
   });
 });
