const Sequelize = require('sequelize');
const db = require('../util/database');
const Match = require('./match');
const Player = require('./player');

const Playerattendancestat = db.define('playerattendancestat', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    document_id: Sequelize.INTEGER
});
Playerattendancestat.belongsTo(Match,{
    foreignKey:"match_id"
})
Playerattendancestat.belongsTo(Player,{
    foreignKey:"player_id"
})

module.exports = Playerattendancestat;