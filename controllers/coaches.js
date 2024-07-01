const Coach = require('../models/coach');

// CRUD Controllers

exports.getCoaches = (req, res, next) => {
    Coach.findAll()
        .then(Coaches => {
            res.status(200).json({ Coaches: Coaches });
        })
        .catch(err => console.log(err));
}


exports.getCoach = (req, res, next) => {
    const coachId = req.params.coachId;
    Coach.findByPk(coachId)
        .then(coach => {
            if (!coach) {
                return res.status(404).json({ message: 'coach not found!' });
            }
            res.status(200).json({ coach: coach });
        })
        .catch(err => console.log(err));
}


exports.createCoach = (req, res, next) => {
  const person_id = req.body.person_id;
  const team_id = req.body.team_id;
  Coach.create({
    person_id: person_id,
    team_id: team_id
  })
    .then(result => {
      console.log('Created Coach');
      res.status(201).json({
        message: 'Coach created successfully!',
        Coach: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}