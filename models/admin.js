const Sequelize = require('sequelize');
const db = require('../util/database');
const Institution = require('./institution');
const Person = require('./person');

const Admin = db.define('admin', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contact: Sequelize.INTEGER,
    beggining: Sequelize.DATE,
    finish: Sequelize.DATE
});
Admin.belongsTo(Person,{
    foreignKey:"person_id"
})
Admin.belongsTo(Institution,{
    foreignKey:"institution_id"
})

module.exports = Admin;