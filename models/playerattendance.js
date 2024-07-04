const Sequelize = require('sequelize');
const db = require('../util/database');
const Attendance = require('./attendance');
const Player = require('./player');

const Playerattendance = db.define('playerattendance', {
    attended: Sequelize.BOOLEAN
});

Playerattendance.belongsTo(Attendance,{
    foreignKey:"attendance_id",
    primaryKey: true
})
Playerattendance.belongsTo(Player,{
    foreignKey:"player_id",
    primaryKey: true
})


module.exports = Playerattendance;