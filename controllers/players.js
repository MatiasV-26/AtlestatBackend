const Player = require('../models/player');

// CRUD Controllers

exports.getPlayers = (req, res, next) => {
    Player.findAll()
        .then(Players => {
            res.status(200).json({ Players: Players });
        })
        .catch(err => console.log(err));
}


exports.getPlayer = (req, res, next) => {
    const playerId = req.params.playerId;
    Player.findByPk(playerId)
        .then(player => {
            if (!player) {
                return res.status(404).json({ message: 'Player not found!' });
            }
            res.status(200).json({ player: player });
        })
        .catch(err => console.log(err));
}


exports.createPlayer = (req, res, next) => {
  const person_id = req.body.person_id;
  const team_id = req.body.team_id;
  Player.create({
    person_id: person_id,
    team_id: team_id
  })
    .then(result => {
      console.log('Created Player');
      res.status(201).json({
        message: 'Player created successfully!',
        Player: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}


exports.updatePlayer = (req, res, next) => {
  const playerId = req.params.playerId;
  const updateTeam_id = req.body.team_id;
  Player.findByPk(playerId)
    .then(player => {
      if (!player) {
        return res.status(404).json({ message: 'player not found!' });
      }
      player.team_id = updateTeam_id;
      return player.save();
    })
    .then(result => {
      res.status(200).json({message: 'player updated!', player: result});
    })
    .catch(err => console.log(err));
}

exports.deletePlayer = (req, res, next) => {
  const playerId = req.params.playerId;
  Player.findByPk(playerId)
    .then(player => {
      if (!player) {
        return res.status(404).json({ message: 'player not found!' });
      }
      return player.destroy({
        where: {
          id: playerId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'player deleted!' });
    })
    .catch(err => console.log(err));
}