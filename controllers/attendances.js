const Attendance = require('../models/attendance');

// CRUD Controllers

exports.getAttendances = (req, res, next) => {
    Attendance.findAll()
        .then(Attendances => {
            res.status(200).json({ Attendances: Attendances });
        })
        .catch(err => console.log(err));
}


exports.getAttendance = (req, res, next) => {
    const attendanceId = req.params.attendanceId;
    Attendance.findByPk(attendanceId)
        .then(attendance => {
            if (!attendance) {
                return res.status(404).json({ message: 'attendance not found!' });
            }
            res.status(200).json({ attendance: attendance });
        })
        .catch(err => console.log(err));
}


exports.createAttendance = (req, res, next) => {
  const date = req.body.date;
  const team_id = req.body.team_id;
  Attendance.create({
    date: date,
    team_id: team_id
  })
    .then(result => {
      console.log('Created Attendance');
      res.status(201).json({
        message: 'Attendance created successfully!',
        Attendance: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}


exports.updateAttendance = (req, res, next) => {
    const attendanceId = req.params.attendanceId;
    const updateDate = req.body.date;
    const updateTeam_id = req.body.team_id;
    Attendance.findByPk(attendanceId)
      .then(attendance => {
        if (!attendance) {
          return res.status(404).json({ message: 'attendance not found!' });
        }
        attendance.date = updateDate;
        attendance.team_id = updateTeam_id;
        return attendance.save();
      })
      .then(result => {
        res.status(200).json({message: 'attendance updated!', attendance: result});
      })
      .catch(err => console.log(err));
  }