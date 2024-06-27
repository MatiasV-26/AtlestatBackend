const Sequelize = require('sequelize');
const db = require('../util/database');

const Institution = db.define('institution', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    district: Sequelize.STRING
});

module.exports = Institution;