'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contacts", { //first arg is name of table, second is object of key-value pairs
      id: {                     //defines a property called key
        allowNull: false,       //property cannot be null
        autoIncrement: true,    //is incremented automatically (i.e., 1, 2, 3)
        primaryKey: true,       //primary key is a unique key that identifies an object
        type: Sequelize.INTEGER //sets property type. Only values of this type are allowed
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {  // We call the down method when we roll back the migration, and it undoes whatever the up method did. In this case, it drops the Contacts table
    return queryInterface.dropTable('Contacts');
  }
};