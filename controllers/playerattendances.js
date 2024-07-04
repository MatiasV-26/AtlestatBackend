const Playerattendance = require('../models/playerattendance');

// CRUD Controllers

exports.getPlayerattendances = (req, res, next) => {
    Playerattendance.findAll()
        .then(playerattendances => {
            res.status(200).json({ playerattendances: playerattendances });
        })
        .catch(err => console.log(err));
}


exports.getPlayerattendance = (req, res, next) => {
    const playerattendanceId = req.params.playerattendanceId;
    Playerattendance.findByPk(playerattendanceId)
        .then(playerattendance => {
            if (!playerattendance) {
                return res.status(404).json({ message: 'playerattendance not found!' });
            }
            res.status(200).json({ playerattendance: playerattendance });
        })
        .catch(err => console.log(err));
}


exports.createPlayerattendance = (req, res, next) => {
  const attended = req.body.attended;
  const attendance_id = req.body.attendance_id;
  const player_id = req.body.player_id;
  Playerattendance.create({
    attended: attended,
    attendance_id: attendance_id,
    player_id: player_id
  })
    .then(result => {
      console.log('Created Playerattendance');
      res.status(201).json({
        message: 'Playerattendance created successfully!',
        Playerattendance: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}