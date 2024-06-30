const Sequelize = require('sequelize');
const db = require('../util/database');

const Person = db.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    phone: Sequelize.INTEGER,
    nationality: Sequelize.STRING,
    birth: Sequelize.DATE,
    gender: Sequelize.STRING

});

module.exports = Person;