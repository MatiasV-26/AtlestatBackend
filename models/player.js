const Sequelize = require('sequelize');
const db = require('../util/database');
const Person = require('./person');
const Team = require('./team');

const Player = db.define('player', {
    playerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});
Player.belongsTo(Person,{
    foreignKey:"person_id"
})
Player.belongsTo(Team,{
    foreignKey:"team_id"
})

module.exports = Player;