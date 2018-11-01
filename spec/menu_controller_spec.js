 const MenuController = require("../controllers/MenuController");

// #1 We are calling the describe method and passing MenuController as the name of the test suite. We then pass a function defining the suite. Inside we have another call to describe. We call this function again because we might want to test several methods of the same class and separating them with different describe calls is a good way of grouping them.

 describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });

 // #3 Write an instance method for the MenuController called remindMe. The behavior of this method is to return a string containing the text "Learning is a life-long pursuit". Use TDD to implement this feature.
  describe("#remindMe()", () => {
    it("should return sting", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
      });
   });
});
