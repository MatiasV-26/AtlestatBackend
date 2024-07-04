const Sequelize = require('sequelize');
const db = require('../util/database');
const Match = require('./match');
const team1 = require('./team');
const team2 = require('./team');

const Matchrelatedwithteams = db.define('matchrelatedwithteams', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});
Matchrelatedwithteams.belongsTo(Match,{
    foreignKey:"match_id"
})
Matchrelatedwithteams.belongsTo(team1,{
    foreignKey:"team1_id"
})
Matchrelatedwithteams.belongsTo(team2,{
    foreignKey:"team2_id"
})

module.exports = Matchrelatedwithteams;