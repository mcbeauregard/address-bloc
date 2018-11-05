'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Contacts", "email", { //first arg is name of table, second is object of key-value pairs
        type: Sequelize.INTEGER //sets property type. Only values of this type are allowed
    });
  },

  down: (queryInterface, Sequelize) => {  // We call the down method when we roll back the migration, and it undoes whatever the up method did. In this case, it drops the Contacts table
    return queryInterface.deleteColumn('Contacts', 'email');
  }
};
