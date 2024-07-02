const Sequelize = require('sequelize');
const db = require('../util/database');

const Match = db.define('match', {
    matchId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    score: Sequelize.STRING,
    date: Sequelize.DATE,
    location: Sequelize.STRING
});

module.exports = Match;