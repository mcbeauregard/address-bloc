const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
        this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit",
          "Show date"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Show date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getDate(){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();

    console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    this.main();
  }
}
