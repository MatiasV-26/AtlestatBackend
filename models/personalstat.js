const Sequelize = require('sequelize');
const db = require('../util/database');
const Match = require('./match');
const Player = require('./player');

const Personalstat = db.define('personalstat', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    document_id: Sequelize.INTEGER
});
Personalstat.belongsTo(Match,{
    foreignKey:"match_id"
})
Personalstat.belongsTo(Player,{
    foreignKey:"player_id"
})

module.exports = Personalstat;