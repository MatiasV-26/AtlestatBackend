const Sequelize = require('sequelize');
const db = require('../util/database');
const Person = require('./person');
const Team = require('./team');

const Coach = db.define('coach', {
    coachId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});
Coach.belongsTo(Person,{
    foreignKey:"person_id"
})
Coach.belongsTo(Team,{
    foreignKey:"team_id"
})

module.exports = Coach;