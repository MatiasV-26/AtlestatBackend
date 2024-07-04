const Playerattendancestat = require('../models/playerattendancestat');

// CRUD Controllers

exports.getPlayerattendancestats = (req, res, next) => {
    Playerattendancestat.findAll()
        .then(Playerattendancestats => {
            res.status(200).json({ Playerattendancestats: Playerattendancestats });
        })
        .catch(err => console.log(err));
}


exports.getPlayerattendancestat = (req, res, next) => {
    const playerattendancestatId = req.params.playerattendancestatId;
    Playerattendancestat.findByPk(playerattendancestatId)
        .then(playerattendancestat => {
            if (!playerattendancestat) {
                return res.status(404).json({ message: 'Playerattendancestat not found!' });
            }
            res.status(200).json({ playerattendancestat: playerattendancestat });
        })
        .catch(err => console.log(err));
}


exports.createPlayerattendancestat = (req, res, next) => {
  const document_id = req.body.document_id;
  const match_id = req.body.match_id;
  const player_id = req.body.player_id;
  Playerattendancestat.create({
    document_id: document_id,
    match_id: match_id,
    player_id: player_id
  })
    .then(result => {
      console.log('Created Playerattendancestat');
      res.status(201).json({
        message: 'Playerattendancestat created successfully!',
        Playerattendancestat: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}