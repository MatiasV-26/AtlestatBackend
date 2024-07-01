const Sequelize = require('sequelize');
const db = require('../util/database');
const Institution = require('./institution');

const Team = db.define('team', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    sport: Sequelize.STRING
});
Team.belongsTo(Institution,{
    foreignKey:"institution_id"
})

module.exports = Team;