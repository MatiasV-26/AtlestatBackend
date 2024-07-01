const Sequelize = require('sequelize');
const db = require('../util/database');
const Person = require('./person');
const Team = require('./team');

const Trainer = db.define('trainer', {
    trainerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});
Trainer.belongsTo(Person,{
    foreignKey:"person_id"
})
Trainer.belongsTo(Team,{
    foreignKey:"team_id"
})

module.exports = Trainer;