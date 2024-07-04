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

exports.updatePlayerattendance = (req, res, next) => {
    const playerattendanceId = req.params.playerattendanceId;

    const updateAttended = req.body.attended;
    const updateAttendance_id = req.body.attendance_id;
    const updatePlayer_id = req.body.player_id;

    Playerattendance.findByPk(playerattendanceId)
      .then(playerattendance => {
        if (!playerattendance) {
          return res.status(404).json({ message: 'playerattendance not found!' });
        }
        playerattendance.attended = updateAttended;
        playerattendance.attendance_id = updateAttendance_id;
        playerattendance.player_id = updatePlayer_id;
        return playerattendance.save();
      })
      .then(result => {
        res.status(200).json({message: 'playerattendance updated!', playerattendance: result});
      })
      .catch(err => console.log(err));
  }
