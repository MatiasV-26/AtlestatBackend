const Sequelize = require('sequelize');
const db = require('../util/database');
const Team = require('./team');

const Attendance = db.define('attendance', {
    attendanceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: Sequelize.DATE
});

Attendance.belongsTo(Team,{
    foreignKey:"team_id"
})

module.exports = Attendance;