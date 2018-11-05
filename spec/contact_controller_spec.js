const ContactController = require("../controllers/ContactController");

const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

    beforeEach((done) => {
        this.book = new ContactController();
    
    // #1 clear the database of any entries created.
    sequelize.sync({force: true}).then((res) => {
        done();
      })
      .catch((err) => {
        done();
      });
   });

    // #2
   describe("#addContact()", () => {

    // pass argument where needed via done
    it("should add a single contact into the book", (done) => {
        this.book.addContact("Alice", "001-101-1010","alice@example.com") // We call addContact on book, and it returns a promise. When resolved, we execute the callback where we set our expectations. When we successfully POST to the database, the ORM returns the object it just persisted so we can confirm it was successful.
        .then((contact) => {
    
            // We have access to the return object inside of the parameter defined on the callback. We called it contact since it should represent a contact object. We confirm that the attributes we passed in have been added to the contact object. We want to call done at the end of our test to signal Jasmine that the test is finished and the async call is completed.        
            expect(contact.name).toBe("Alice");
            expect(contact.phone).toBe("001-101-1010");
            // returns email
            expect(contact.email).toBe("alice@example.com");
            done();
          })
          .catch((err) => {
            done();
          });
    });
  });

   // #3 test to get a list of contacts
  describe("#getContacts()", () => {

    it("should return an empty array when no contacts are available", (done) => {
      this.book.getContacts()
      .then((contacts) => {
        expect(contacts.length).toBe(0);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should return an array of contacts when contacts are available", (done) => {
      this.book.addContact("Alice", "001-101-1010", "alice@example.com")
      .then(() => {
        this.book.getContacts()
        .then((contacts) => {
          expect(contacts.length).toBe(1);
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    describe("#iterativeSearch()", () => {

        const zelda = ["Zelda Smith", "000-100-111", "zelda@nintendo.com"];
        const snake = ["Solid Snake", "100-100-100", "snake@konami.com"];
        const magus = ["Magus Johnson", "101-010-101", "magus@squaresoft.com"];
        const alloy = ["Alloy Rodriguez", "111-111-111", "allow@guerrilla-games.com"];
  
        it("should return null when called with an empty array", () => {
          expect(this.book.iterativeSearch([], "Alloy")).toBeNull();
        });
        
        it("should return null when contact is not found", (done) => {
            this.book.addContact(...zelda)
            .then(() => {
              this.book.getContacts()
              .then((contacts) => {
                expect(this.book.iterativeSearch(contacts, "Alloy Rodriguez")).toBeNull();
                done();
              })
              .catch((err) => {
                console.log(err);
                done();
              });
            });
          });
       
          it("should return the contact if found", (done) => {
            this.book.addContact(...alloy)
            .then(() => {
              this.book.addContact(...magus)
              .then(() => {
                this.book.getContacts()
                .then((contacts) => {
                  let contact = this.book.iterativeSearch(contacts, "Magus Johnson");
                  expect(contact.name).toBe("Magus Johnson");
                  expect(contact.phone).toBe("101-010-101");
                  expect(contact.email).toBe("magus@squaresoft.com");
                  done();
                })
                .catch((err) => {
                  console.log(err);
                  done();
                });
              });
            });
          });
      });

  });
})