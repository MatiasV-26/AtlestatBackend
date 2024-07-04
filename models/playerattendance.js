const Sequelize = require('sequelize');
const db = require('../util/database');
const Attendance = require('./attendance');
const Player = require('./player');

const Playerattendance = db.define('playerattendance', {
    
    attended: Sequelize.BOOLEAN
});

Playerattendance.belongsTo(Attendance,{
    foreignKey:"attendance_id",
})
Playerattendance.belongsTo(Player,{
    foreignKey:"player_id",
})


module.exports = Playerattendance;